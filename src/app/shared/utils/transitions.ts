import { animate, state, style, transition, trigger } from "@angular/animations";

export const transitions: { name: string; value: string }[] = [
    {
        name: 'ease',
        value: 'transform 500ms ease, width 500ms ease, height 500ms ease',
    },
    {
        name: 'ease-out',
        value:
            'transform 500ms ease-out, width 500ms ease-out, height 500ms ease-out',
    },
    {
        name: 'linear',
        value: 'transform 500ms linear, width 500ms linear, height 500ms linear',
    },
    {
        name: 'overflowing',
        value:
            'transform 500ms cubic-bezier(.28,.49,.79,1.35), width 500ms cubic-bezier(.28,.49,.79,1.35), height 500ms cubic-bezier(.28,.49,.79,1.35)',
    },
    {
        name: 'fast',
        value: 'transform 200ms ease, width 200ms linear, height 200ms linear',
    },
    {
        name: 'slow-motion',
        value:
            'transform 1000ms linear, width 1000ms linear, height 1000ms linear',
    },
    { name: 'transform-only', value: 'transform 500ms ease' },
];


export const slideInOut = [
    trigger('slideInOut', [
        state('in', style({
            transform: 'translateY(0)'
        })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.3s ease-in')
        ]),
        transition(':leave', [
            animate('0.3s ease-in', style({ transform: 'translateY(100%)' }))
        ])
    ])
]




