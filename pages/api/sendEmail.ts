import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type SendEmailBody = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { firstname, lastname, email, phone, service, message } = req.body as SendEmailBody;

  // Basic validation
  if (!email && !(firstname || lastname) && !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // Ensure email credentials are configured
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
  const EMAIL_TO = process.env.EMAIL_TO ?? EMAIL_USER;

  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.error('EMAIL_USER or EMAIL_PASSWORD is not set. Email service not configured.');
    return res.status(500).json({ success: false, message: 'Email service not configured.' });
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_TO,
    subject: 'New Service Order',
    text: `New Service Order!\nName: ${firstname ?? ''} ${lastname ?? ''}\nEmail: ${email ?? ''}\nPhone: ${phone ?? ''}\nService: ${service ?? ''}\nMessage: ${message ?? ''}`,
  };

  try {
    // Verify transporter and send the email
    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
