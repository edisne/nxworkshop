import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as WidgetsActions from './widgets.actions';
import { WidgetsEffects } from './widgets.effects';

describe('WidgetsEffects', () => {
  let actions: Observable<Action>;
  let effects: WidgetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WidgetsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(WidgetsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: WidgetsActions.initWidgets() });

      const expected = hot('-a-|', {
        a: WidgetsActions.loadWidgetsSuccess({ widgets: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
