import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}
  getHello(): string {
    return 'Hello World!';
  }

  sendEmail(): boolean {
    const user = {
      email: 'cbonel@sanservices.hn',
      name: 'Cesar',
      balance: 50.0,
      subject: 'Thanks for Subscribing',
    };

    this.mailService.sendEmail(user);
    return true;
  }
}
