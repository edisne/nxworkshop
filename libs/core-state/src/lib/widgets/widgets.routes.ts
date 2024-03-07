import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromWidgets from './+state/widgets.reducer';
import { WidgetsEffects } from './+state/widgets.effects';
import { WidgetsComponent } from 'apps/client/src/app/widgets/widgets.component';

export const WIDGET_ROUTES: Route[] = [
  {
    path: '',
    component: WidgetsComponent,
    providers: [
      provideState(fromWidgets.WIDGETS_FEATURE_KEY, fromWidgets.widgetsReducer),
      provideEffects(WidgetsEffects),
    ],
  },
];
