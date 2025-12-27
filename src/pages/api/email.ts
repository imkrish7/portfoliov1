import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";

async function POST(request: NextApiRequest, response: NextApiResponse) {
  const { name, email, message } = request.body;

  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground",
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECIEVER,
      subject: `Message from ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    response.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Failed to send email" });
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    if (request.method === "POST") return await POST(request, response);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Failed to send email" });
  }
}
