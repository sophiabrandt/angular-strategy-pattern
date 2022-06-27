import { Component, ContentChild, Inject, Input, OnInit } from '@angular/core';
import {
  AbstractWidgetService,
  Widgeatable,
  WIDGET_SERVICE,
  WIDGET_TOKEN,
} from './widget.types';

@Component({
  selector: 'app-widget-container',
  template: `
      <div class="box">
        <h4>{{ header }}</h4>
        <ng-content></ng-content>
        <a href="http://example.com">Follow us</a>
      </div>

  `,
  styles: [
    '.box { border: 1px dotted black; margin: 1rem; padding: 0.5em; }',
    'a { text-decoration: none; }',
  ],
})
export class WidgetContainerComponent implements OnInit {
  @Input()
  header: string;

  // Context doesn't know the concrete class of a strategy
  // It should work with all strategies via the strategy interface
  @ContentChild(WIDGET_TOKEN, { static: true }) content: Widgeatable;

  constructor(
    @Inject(WIDGET_SERVICE) private provider: AbstractWidgetService
  ) {}

  ngOnInit() {
    this.provider.someMethodForTheService();
  }
}
