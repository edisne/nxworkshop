import { Route } from '@angular/router';
import { RootStoreConfig, provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromWidgets from './+state/widgets.reducer';
import { WidgetsEffects } from './+state/widgets.effects';
import { WidgetsComponent } from 'apps/client/src/app/widgets/widgets.component';
import { WidgetsFacade } from 'libs/core-state/src/lib/widgets/+state/widgets.facade';

const STORE_NAME = 'nxworkshp-widgets-store';
const storeConfig: RootStoreConfig<any, any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
};
