import { animate, animation, style } from '@angular/animations';


export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{time}} cubic-bezier(0,0,.2,1)', style({ opacity: 1 })),
]);