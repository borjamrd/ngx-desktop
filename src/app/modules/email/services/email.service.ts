import { computed, Injectable, signal } from '@angular/core';
import { EmailFolder } from '../components/email-view/email-view.component';

export interface Sender {
    name: string;
    email: string;
}
export interface Email {
    id: string;
    message: string;
    sendedAt: Date;
    subject: string;
    to: string;
    folderType:
        | 'inbox'
        | 'sent'
        | 'draft'
        | 'trash'
        | 'spam'
        | 'important'
        | 'favorite';
    from: Sender;
}
@Injectable({
    providedIn: 'root',
})
export class EmailService {
    public emailSelected = signal<Email | null>(null);
    public selectedFolder = signal<EmailFolder>({
        name: 'Inbox',
        icon: 'inbox',
        color: 'blue',
        folderType: 'inbox',
    });
    private emailList = signal<Email[]>([
        {
            id: crypto.randomUUID(),
            message:
                'Hey there! I hope this email finds you well. I wanted to touch base about the project we discussed last week. Also, have you heard about the new coffee shop that opened downtown? We should check it out sometime!',
            sendedAt: new Date(),
            subject: 'Project Update and Coffee Shop',
            to: 'alfredo@gmail.com',
            folderType: 'inbox',
            from: {
                name: 'Borja',
                email: 'borja@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Benedict, I hope you're having a great day. I wanted to follow up on the presentation materials you sent over. By the way, did you catch the game last night? What an incredible finish! Oh, and before I forget, my sister is getting married next month and I'd love for you to attend if you're free.",
            sendedAt: new Date(),
            subject: 'Presentation Follow-up and Wedding Invitation',
            to: 'benedict@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Felipe Neri',
                email: 'felipe@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Teresa, I hope this message finds you in good spirits. I've been meaning to ask you about your recent trip to Japan. How was it? I'm planning a vacation myself and could use some recommendations. Also, I came across an interesting article about sustainable living that I thought you might enjoy. Let me know if you'd like me to forward it to you.",
            sendedAt: new Date(),
            subject: 'Japan Trip and Sustainable Living',
            to: 'teresa@gmail.com',
            folderType: 'draft',
            from: {
                name: 'Jimena Alvarez',
                email: 'jimena@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Dear Borja, I hope you're doing well. I wanted to apologize for missing our meeting last Thursday. My car broke down on the way to the office, and it was a whole ordeal. On a brighter note, I finished reading that book you recommended, and it was fantastic! We should grab lunch soon and discuss it.",
            sendedAt: new Date(),
            subject: 'Apologies and Book Discussion',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Penélope Sierra',
                email: 'penelope@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Borja, I hope this email finds you well. I wanted to confirm our meeting for next Tuesday at 2 PM. Also, I came across an interesting article about the future of AI in our industry that I thought you might find intriguing. Lastly, how did your son's soccer game go last weekend? I remember you mentioning he had a big match coming up.",
            sendedAt: new Date(),
            subject: 'Meeting Confirmation and AI Article',
            to: 'borja@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Alberto González',
                email: 'alberto@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Borja, I hope you're having a great week. I wanted to touch base about the charity event we discussed last month. Have you had a chance to think about it? On an unrelated note, I tried that new recipe you shared, and it was delicious! My family loved it. Also, did you hear about the upcoming tech conference in the city? It might be worth attending.",
            sendedAt: new Date(),
            subject: 'Charity Event and Tech Conference',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Tejeringo El Hoyo',
                email: 'tejeringo@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Dear Alfredo, I hope this email finds you in good health. I wanted to follow up on our conversation about the new project timeline. Also, I recently visited an art exhibition that I think you'd really appreciate - the use of color was extraordinary. By the way, how's your guitar playing coming along? I remember you mentioning you were taking lessons.",
            sendedAt: new Date(),
            subject: 'Project Timeline and Art Exhibition',
            to: 'alfredo@gmail.com',
            folderType: 'inbox',
            from: {
                name: 'Manolo Puertas',
                email: 'manolo@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Benedict, I trust this message finds you well. I wanted to inform you that the quarterly report is ready for your review. On a personal note, I recently tried out that new hiking trail you recommended, and the views were breathtaking! Also, I came across an interesting podcast about productivity hacks that I thought you might enjoy. Let me know if you'd like me to send you the link.",
            sendedAt: new Date(),
            subject: 'Quarterly Report and Hiking Adventure',
            to: 'benedict@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Esperanza Aguerra',
                email: 'esperanza@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Teresa, I hope you're having a fantastic day. I wanted to check in about the team-building event we discussed last week. Have you had any thoughts on potential activities? By the way, I tried that new vegetarian restaurant you mentioned, and it was incredible! Also, I've been meaning to ask - how's your photography project coming along?",
            sendedAt: new Date(),
            subject: 'Team Building and Photography Project',
            to: 'teresa@gmail.com',
            folderType: 'draft',
            from: {
                name: 'Podencos S.A',
                email: 'podencos@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Dear Borja, I hope this email finds you in good spirits. I wanted to discuss the possibility of rescheduling our meeting next week. Something urgent has come up, and I may need to be out of town. On a lighter note, I finally watched that movie you recommended, and it was fantastic! The plot twists kept me on the edge of my seat. Also, how's your garden doing this season? I remember you mentioning you were trying to grow some exotic vegetables.",
            sendedAt: new Date(),
            subject: 'Meeting Reschedule and Movie Discussion',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Pablo Iglesias',
                email: 'pablo@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Borja, I trust this message finds you well. I wanted to inform you that the project proposal has been approved by the board. This is great news for our team! On another note, I recently attended a workshop on mindfulness in the workplace that I found incredibly beneficial. I'd be happy to share some insights if you're interested. Also, how was your family vacation last month? I hope you all had a wonderful time.",
            sendedAt: new Date(),
            subject: 'Project Approval and Mindfulness Workshop',
            to: 'borja@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Pablo Iglesias',
                email: 'pablo@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Borja, I hope you're doing well. I wanted to touch base about the upcoming client presentation. Do you have any specific points you'd like me to emphasize? Also, I came across an interesting article about sustainable business practices that I thought might interest you. On a personal note, how's your training for the marathon going? I remember you mentioning you were preparing for one.",
            sendedAt: new Date(),
            subject: 'Client Presentation and Marathon Training',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Federico Jiménez',
                email: 'federico@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Dear Alfredo, I hope this email finds you in good health. I wanted to follow up on our discussion about the new marketing strategy. Have you had a chance to review the materials I sent over? Also, I recently tried out that new recipe app you recommended, and it's been a game-changer for my meal planning. By the way, how did your daughter's piano recital go? I hope it was a success!",
            sendedAt: new Date(),
            subject: 'Marketing Strategy and Piano Recital',
            to: 'alfredo@gmail.com',
            folderType: 'inbox',
            from: {
                name: 'Alberto Jiménez',
                email: 'borja@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Benedict, I trust you're having a great week. I wanted to inform you that the team has completed the first phase of the project ahead of schedule. This puts us in a great position moving forward. On another note, I recently visited an amazing art exhibition that I think you'd really appreciate. The use of light and shadow was extraordinary. Also, how's your Spanish lessons coming along? I remember you mentioning you were trying to learn.",
            sendedAt: new Date(),
            subject: 'Project Update and Art Exhibition',
            to: 'benedict@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Alberto Pérez',
                email: 'alberto@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Teresa, I hope you're doing well. I wanted to check in about the upcoming team retreat. Do you have any preferences for activities or locations? I've been researching some options and would love your input. Also, I finally got around to reading that book you recommended last month, and I couldn't put it down! We should definitely discuss it over coffee sometime. By the way, how's your new yoga practice going? I hope you're enjoying it!",
            sendedAt: new Date(),
            subject: 'Team Retreat and Book Discussion',
            to: 'teresa@gmail.com',
            folderType: 'draft',
            from: {
                name: 'Marta Freire',
                email: 'marta@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Dear Borja, I hope this message finds you in good spirits. I wanted to discuss the possibility of extending the deadline for the current project. We've encountered some unexpected challenges, but I believe with a little more time, we can deliver an exceptional result. On a lighter note, I tried out that new coffee shop you recommended, and the espresso was incredible! Also, how was the concert you attended last weekend? I hope it lived up to your expectations!",
            sendedAt: new Date(),
            subject: 'Project Deadline and Weekend Plans',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Ricardo García',
                email: 'ricardo@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hello Borja, I trust this email finds you well. I wanted to inform you that the quarterly report is ready for your review. I've highlighted some key points that I think deserve special attention. On another note, I recently discovered a fantastic podcast about innovation in our industry that I think you'd find fascinating. Lastly, how did your son's science fair project turn out? I hope it was a success!",
            sendedAt: new Date(),
            subject: 'Quarterly Report and Science Fair',
            to: 'borja@gmail.com',
            folderType: 'sent',
            from: {
                name: 'Ninel Pardo',
                email: 'ninel@gmail.com',
            },
        },
        {
            id: crypto.randomUUID(),
            message:
                "Hi Borja, I hope you're having a great week. I wanted to touch base about the upcoming client meeting. I've prepared a preliminary agenda, but I'd love your input on any additional topics we should cover. Also, I finally tried that new restaurant you recommended, and the food was absolutely delicious! On a personal note, how's your photography hobby coming along? Have you captured any interesting shots lately?",
            sendedAt: new Date(),
            subject: 'Client Meeting and Photography Hobby',
            to: 'borja@gmail.com',
            folderType: 'trash',
            from: {
                name: 'Pancho Iglesias',
                email: 'pancho@gmail.com',
            },
        },
    ]);
    public emailsByFolder = computed(() => {
        return this.emailList().filter(
            (email) => email.folderType === this.selectedFolder().folderType
        );
    });

    sendEmail(email: Email) {
        this.emailList.update((list) => [email, ...list]);
    }

    selectEmail(email: Email) {
        this.emailSelected.set(email);
    }

    selectFolder(folder: EmailFolder) {
        this.selectedFolder.set(folder);
    }

    filterEmails(search: string) {
        this.emailList.set(
            this.emailList().filter(
                (email) =>
                    email.subject.includes(search) &&
                    email.folderType === this.selectedFolder().folderType
            )
        );
    }
}
