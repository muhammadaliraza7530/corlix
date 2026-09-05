import nodemailer from 'nodemailer';

const recipient = 'corelixsystem@gmail.com';

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!user || !appPassword) {
    throw new Error('Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass: appPassword,
    },
  });
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  service?: string;
  message: string;
}) {
  await getTransporter().sendMail({
    from: `Corelix Website <${process.env.GMAIL_USER}>`,
    to: recipient,
    replyTo: input.email,
    subject: `New project inquiry from ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Service: ${input.service || 'Not specified'}`,
      '',
      'Project details:',
      input.message,
    ].join('\n'),
  });
}

export async function sendNewsletterEmail(email: string) {
  await getTransporter().sendMail({
    from: `Corelix Website <${process.env.GMAIL_USER}>`,
    to: recipient,
    replyTo: email,
    subject: 'New Corelix newsletter subscriber',
    text: `A new visitor subscribed to the Corelix Systems newsletter: ${email}`,
  });
}
