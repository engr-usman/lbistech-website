import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface NotificationData {
  type: 'contact' | 'enrollment'
  data: any
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data }: NotificationData = await req.json()

    // Send email notification
    await sendEmailNotification(type, data)
    
    // Send WhatsApp notification (if phone number provided)
    if (data.phone) {
      await sendWhatsAppNotification(type, data)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Notifications sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Notification error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

async function sendEmailNotification(type: string, data: any) {
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
  
  if (!RESEND_API_KEY) {
    console.log('No Resend API key found, skipping email notification')
    return
  }

  const emailData = type === 'contact' 
    ? getContactEmailData(data)
    : getEnrollmentEmailData(data)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error(`Email API error: ${response.statusText}`)
    }

    console.log('Email notification sent successfully')
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}

function getContactEmailData(data: any) {
  return {
    from: 'LbisTech <noreply@lbistech.com>',
    to: ['info@lbistech.com'], // Your admin email
    subject: `New Contact Form Submission - ${data.first_name} ${data.last_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Course Interest:</strong> ${data.course_interest || 'General inquiry'}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>⏰ Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px;">
          Please respond to this inquiry within 24 hours for the best customer experience.
        </p>
      </div>
    `,
  }
}

function getEnrollmentEmailData(data: any) {
  return {
    from: 'LbisTech <noreply@lbistech.com>',
    to: ['info@lbistech.com'], // Your admin email
    subject: `New Course Enrollment - ${data.course_id} - ${data.first_name} ${data.last_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Course Enrollment</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Student Details</h3>
          <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Experience Level:</strong> ${data.experience_level || 'Not specified'}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Course Information</h3>
          <p><strong>Course:</strong> ${data.course_id}</p>
          <p><strong>Type:</strong> ${data.is_free ? '🆓 Free Course' : '💰 Paid Course'}</p>
        </div>
        
        ${data.learning_goals ? `
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Learning Goals</h3>
          <p style="white-space: pre-wrap;">${data.learning_goals}</p>
        </div>
        ` : ''}
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>⏰ Enrolled:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #dc2626;"><strong>🚨 Action Required:</strong></p>
          <ul style="margin: 10px 0;">
            <li>Contact student within 24 hours</li>
            <li>${data.is_free ? 'Provide course access details' : 'Send payment instructions'}</li>
            <li>Add to WhatsApp community group</li>
            <li>Send welcome email with course materials</li>
          </ul>
        </div>
      </div>
    `,
  }
}