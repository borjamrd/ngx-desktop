import { Injectable, signal } from '@angular/core';


export interface Email {
  message: string,
  sendedAt: Date,
  subject: string,
  to: string
  type: 'inbox' | 'sent' | 'draft' | 'trash',
  from: string
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public emailSelected = signal<Email | null>(null);
  public emailList = signal<Email[]>([
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      type: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      type: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      type: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      type: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      type: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      type: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      type: 'trash',
      from: 'borja@gmail.com'
    }
  ])


  sendEmail(email: Email) {
    console.log(email)
    this.emailList.update(list => [...list, email])
  }

  selectEmail(email: Email) {
    this.emailSelected.set(email)
  }
}
