import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FacebookContentComponent } from './content/facebook-content.component';
import { TwitterContentComponent } from './content/twitter-content.component';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetService } from './widget.service';
import { WIDGET_SERVICE } from './widget.types';

@NgModule({
  imports: [CommonModule],
  exports: [
    WidgetContainerComponent,
    FacebookContentComponent,
    TwitterContentComponent,
  ],
  declarations: [
    WidgetContainerComponent,
    FacebookContentComponent,
    TwitterContentComponent,
  ],
  providers: [{ provide: WIDGET_SERVICE, useClass: WidgetService }],
})
export class WidgetModule {}
