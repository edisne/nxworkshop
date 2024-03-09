import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { WidgetsEffects, WidgetsFacade } from '@nxworkshp/core-state';
import { MaterialModule } from '@nxworkshp/material';
import { WidgetsComponent } from 'apps/client/src/app/widgets/widgets.component';
import * as fromWidgets from 'libs/core-state/src/lib/widgets/+state/widgets.reducer';

export const appRoutes: Route[] = [
  {
    path: 'widgets',
    component: WidgetsComponent,
    providers: [
      provideState(
        fromWidgets.WIDGETS_FEATURE_KEY,
        fromWidgets._widgetsReducer
      ),
      provideEffects(WidgetsEffects),
      WidgetsFacade,
    ],
    // loadChildren: () =>
    //   import('libs/core-state/src/lib/widgets/widgets.routes').then(
    //     (r) => r.WIDGET_ROUTES
    //   ),
  },
];
