import type { APIRoute } from 'astro';
import { testConnection } from '../../lib/database';

export const GET: APIRoute = async () => {
  try {
    const isConnected = await testConnection();
    
    if (isConnected) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Database connection successful',
        timestamp: new Date().toISOString()
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Database connection failed'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};