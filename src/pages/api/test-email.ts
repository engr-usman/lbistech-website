import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { to, subject, message } = await request.json();
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Send test email
    const info = await transporter.sendMail({
      from: import.meta.env.SMTP_FROM || import.meta.env.SMTP_USER,
      to: to,
      subject: subject || 'Test Email from LbisTech',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Email Test Successful!</h2>
          <p>This is a test email from your LbisTech website.</p>
          <p><strong>Message:</strong> ${message || 'Email configuration is working correctly!'}</p>
          <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: info.messageId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Test email error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};