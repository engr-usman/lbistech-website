import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  course_interest?: string
  message: string
  status?: 'new' | 'in_progress' | 'resolved' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface EnrollmentSubmission {
  id?: string
  course_id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  experience_level?: string
  learning_goals?: string
  is_free: boolean
  status?: 'pending' | 'enrolled' | 'payment_pending' | 'cancelled'
  created_at?: string
  updated_at?: string
}

// Database functions
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()

    if (error) throw error

    // Send notification
    await sendNotification('contact', submission)

    return { success: true, data: submission }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return { success: false, error: error.message }
  }
}

export async function submitEnrollmentForm(data: Omit<EnrollmentSubmission, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data: submission, error } = await supabase
      .from('enrollment_submissions')
      .insert([data])
      .select()
      .single()

    if (error) throw error

    // Send notification
    await sendNotification('enrollment', submission)

    return { success: true, data: submission }
  } catch (error) {
    console.error('Enrollment form submission error:', error)
    return { success: false, error: error.message }
  }
}

async function sendNotification(type: 'contact' | 'enrollment', data: any) {
  try {
    const { error } = await supabase.functions.invoke('send-notification', {
      body: { type, data }
    })

    if (error) {
      console.error('Notification error:', error)
    }
  } catch (error) {
    console.error('Failed to send notification:', error)
  }
}

// Admin functions (for viewing submissions)
export async function getContactSubmissions(limit = 50) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

export async function getEnrollmentSubmissions(limit = 50) {
  const { data, error } = await supabase
    .from('enrollment_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

export async function updateSubmissionStatus(
  table: 'contact_submissions' | 'enrollment_submissions',
  id: string,
  status: string
) {
  const { data, error } = await supabase
    .from(table)
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}