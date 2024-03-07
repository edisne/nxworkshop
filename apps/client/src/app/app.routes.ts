import { Route } from '@angular/router';
import { WidgetsComponent } from 'apps/client/src/app/widgets/widgets.component';

export const appRoutes: Route[] = [
  {
    path: 'widgets',
    component: WidgetsComponent,
    // loadChildren: () =>
    //   import('libs/core-state/src/lib/widgets/widgets.routes').then(
    //     (r) => r.WIDGET_ROUTES
    //   ),
  },
];
