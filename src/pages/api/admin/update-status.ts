import type { APIRoute } from 'astro';
import { updateSubmissionStatus } from '../../../lib/database';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { table, id, status } = await request.json();
    
    if (!table || !id || !status) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const result = await updateSubmissionStatus(table, id, status);
    
    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating status:', error);
    return new Response(JSON.stringify({ error: 'Failed to update status' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};