import { Injectable, signal } from '@angular/core';


export interface Email {
  message: string,
  sendedAt: Date,
  subject: string,
  to: string
  folder: 'inbox' | 'sent' | 'draft' | 'trash' | 'spam'
  from: string
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public emailSelected = signal<Email | null>(null);
  public selectedFolder = signal<'inbox' | 'sent' | 'draft' | 'trash'>('inbox');
  public emailList = signal<Email[]>([
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      folder: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      folder: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      folder: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      folder: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'alfredo@gmail.com',
      folder: 'inbox',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'benedict@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'teresa@gmail.com',
      folder: 'draft',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'sent',
      from: 'borja@gmail.com'
    },
    {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      sendedAt: new Date(),
      subject: 'Lorem ipsum dolor sit amet',
      to: 'borja@gmail.com',
      folder: 'trash',
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
