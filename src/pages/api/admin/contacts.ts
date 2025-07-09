import type { APIRoute } from 'astro';
import { getContactSubmissions } from '../../../lib/database';

export const GET: APIRoute = async () => {
  try {
    const submissions = await getContactSubmissions();
    
    return new Response(JSON.stringify(submissions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch submissions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};