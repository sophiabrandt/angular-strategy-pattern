import { Component } from '@angular/core';
import { Widgeatable, WIDGET_TOKEN } from '../widget.types';

@Component({
  selector: 'app-facebook-content',
  template: `
  <p>I'm the content for the Facebook component.</p>
  <p>I'm similar to the Twitter strategy, but still different 🌈!</p>
  `,
  styles: ['p { color: #3b5998; }'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: FacebookContentComponent,
    },
  ],
})
export class FacebookContentComponent implements Widgeatable {
  constructor() {}

  ngOnInit() {
    this.onWidget();
  }

  onWidget() {
    console.log(
      '%c Concrete Strategy for the Facebook implementation',
      'color: #89fffd; background: slategrey;font-size: 16px;'
    );
  }
}
