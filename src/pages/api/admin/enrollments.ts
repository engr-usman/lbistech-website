import type { APIRoute } from 'astro';
import { getEnrollmentSubmissions } from '../../../lib/database';

export const GET: APIRoute = async () => {
  try {
    const submissions = await getEnrollmentSubmissions();
    
    return new Response(JSON.stringify(submissions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching enrollment submissions:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch submissions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};