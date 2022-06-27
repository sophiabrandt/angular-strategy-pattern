import { InjectionToken } from '@angular/core';

// logic that all widgets share
//
// Interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.
export interface Widgeatable {
  onWidget(): void;
}

// abstract methods for a service
// you can implement different custom implementations
export abstract class AbstractWidgetService {
  abstract someMethodForTheService(): void;
}

export const WIDGET_SERVICE = new InjectionToken<AbstractWidgetService>(
  'Abstract Widget Service'
);
export const WIDGET_TOKEN = new InjectionToken<Widgeatable>('Widgeatable');
