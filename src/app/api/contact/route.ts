import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, inquiryType, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect securely to Gmail via SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const humanReadableInquiry = {
      custom: "Custom System Development",
      sahsaathi: "Integrating Sah Saathi System",
      copydude: "Integrating CopyDude Kiosks",
      hardware: "Hardware / Infrastructure Partnership",
      general: "General Inquiry",
    }[inquiryType as string] || inquiryType;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: '1lunextgenprivatelimited@gmail.com', // Internal delivery
      replyTo: email as string, // Makes replies go straight to the prospect
      subject: `New Enterprise Inquiry: ${company ? company + ' (' + name + ')' : name} - ${humanReadableInquiry}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 30px; background-color: #f9fbff; border-radius: 12px; border: 1px solid #e2e8f0; max-w-2xl text-color: #1a202c;">
          <h2 style="color: #1E88E5; font-size: 24px; font-weight: bold; margin-bottom: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">OneLU Incoming Project Lead</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 150px; color: #718096; font-size: 14px; text-transform: uppercase;"><strong>Contact Name</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #718096; font-size: 14px; text-transform: uppercase;"><strong>Email Address</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px;"><a href="mailto:${email}" style="color: #1E88E5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #718096; font-size: 14px; text-transform: uppercase;"><strong>Organization</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px;">${company || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #718096; font-size: 14px; text-transform: uppercase;"><strong>Inquiry Target</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; font-weight: bold;">${humanReadableInquiry}</td>
            </tr>
          </table>

          <h3 style="color: #4a5568; font-size: 16px; text-transform: uppercase; margin-bottom: 12px;">Operational Challenge Details:</h3>
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 16px; line-height: 1.6; color: #2d3748; white-space: pre-wrap;">${message}</div>
          
          <div style="margin-top: 40px; font-size: 12px; color: #a0aec0; text-align: center;">
            <p>This message was automatically routed from the OneLU Infrastructure Platform.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Mail dispatch failure:", error);
    return NextResponse.json({ error: "API delivery failed context log" }, { status: 500 });
  }
}
