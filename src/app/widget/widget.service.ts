import { Injectable } from '@angular/core';
import { AbstractWidgetService } from './widget.types';

@Injectable()
export class WidgetService implements AbstractWidgetService {
  constructor() {}

  someMethodForTheService() {
    console.log(
      '%c Widget Service Logic encapsulated in default widget service',
      'color: orange; font-size: 18px;'
    );
  }
}
