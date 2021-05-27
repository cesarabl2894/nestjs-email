import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from './interfaces/user.interface';
import { env } from 'process';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(emailData: User) {
    const { balance, email, name, subject } = emailData;
    try {
      await this.mailerService.sendMail({
        to: email,
        cc: 'krosado@gmail.com', // tu correo para que se reenvie
        subject,
        template: './confirmation',
        context: {
          name,
          balance,
          email,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
