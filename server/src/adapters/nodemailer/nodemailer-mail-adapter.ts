import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "83ace2d46f5661",
    pass: "7e410a2146c6c3"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@fidget.com>',
      to: 'Lucas Reis <lucasship@hotmail.com>',
      subject,
      html: body
    })
  }
}