import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ ok: false });

  const safeName = String(name).slice(0, 100);
  const safeEmail = String(email).slice(0, 200);
  const safeMessage = String(message).slice(0, 5000);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: safeEmail,
      subject: `New contact form message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false });
  }
}
