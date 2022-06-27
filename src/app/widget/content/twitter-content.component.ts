import { Component } from '@angular/core';
import { Widgeatable, WIDGET_TOKEN } from '../widget.types';

@Component({
  selector: 'app-twitter-content',
  template: `
  <p>I'm  the content for the Twitter component.</p>
  <p>Tweet tweet 🐦</p>
  `,
  styles: ['p { color: #55acee}'],
  providers: [{ provide: WIDGET_TOKEN, useExisting: TwitterContentComponent }],
})
export class TwitterContentComponent implements Widgeatable {
  constructor() {}

  ngOnInit() {
    this.onWidget();
  }

  onWidget() {
    console.log(
      '%c Concrete Strategy for the Twitter implementation',
      'color: darkblue; background: white; font-size: 16px;'
    );
  }
}
