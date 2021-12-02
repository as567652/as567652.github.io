import { trigger, state, style, animate, transition } from '@angular/animations';

export function flyInOut() {
    return trigger('flyInOut', [
        //state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':leave', [
            animate('400ms ease-out', style({ transform: 'scale(0.9)' })),
            animate('800ms ease-out', style({ transform: 'scale(0.9) translateX(-200%)'}))
        ]),
        transition(':enter', [
            style({ transform: 'scale(0.9) translateX(200%)'}),
            animate('800ms 800ms ease-in', style({ transform: 'scale(0.9)' })),
            animate('400ms ease-in')
        ])
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}