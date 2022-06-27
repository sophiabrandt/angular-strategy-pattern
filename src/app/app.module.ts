import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';
import { AbstractWidgetService, WIDGET_SERVICE } from './widget/widget.types';

class CustomWidgetService implements AbstractWidgetService {
  someMethodForTheService(): void {
    console.log(
      '%c Custom implementation of the content loading service',
      'color: #55f8ff; font-size: 18px;'
    );
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule, WidgetModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    /* {
      provide: WIDGET_SERVICE,
      useClass: CustomWidgetService
    } */
  ],
})
export class AppModule {}
