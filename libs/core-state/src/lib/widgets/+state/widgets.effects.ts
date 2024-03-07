import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as WidgetsActions from './widgets.actions';
import { WidgetsService } from '@nxworkshp/core-data';
import { Widget } from '@nxworkshp/api-interfaces';
import { pessimisticUpdate } from '@nx/angular';

@Injectable()
export class WidgetsEffects {
  private actions$ = inject(Actions);
  private widgetService = inject(WidgetsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.initWidgets),
      switchMap(() => of(WidgetsActions.loadWidgetsSuccess({ widgets: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(WidgetsActions.loadWidgetsFailure({ error }));
      })
    )
  );
  loadWidgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.loadWidgets),
      switchMap(() =>
        this.widgetService.all().pipe(
          map((widgets: Widget[]) =>
            WidgetsActions.loadWidgetsSuccess({ widgets })
          ),
          catchError((error) =>
            of(WidgetsActions.loadWidgetsFailure({ error }))
          )
        )
      )
    )
  );

  loadWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.loadWidget),
      switchMap(({ widgetId }) =>
        this.widgetService.find(widgetId).pipe(
          map((widget: Widget) => WidgetsActions.loadWidgetSuccess({ widget })),
          catchError((error) => of(WidgetsActions.loadWidgetFailure({ error })))
        )
      )
    )
  );

  createWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.createWidget),
      pessimisticUpdate({
        run: (action) =>
          this.widgetService
            .create(action.widget)
            .pipe(
              map((widget: Widget) =>
                WidgetsActions.loadWidgetSuccess({ widget })
              )
            ),
        onError: (action, error) =>
          WidgetsActions.createWidgetFailure({ error }),
      })
    )
  );

  updateWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.updateWidget),
      pessimisticUpdate({
        run: (action) =>
          this.widgetService
            .update(action.widget)
            .pipe(
              map((widget: Widget) =>
                WidgetsActions.updateWidgetSuccess({ widget })
              )
            ),
        onError: (action, error) =>
          WidgetsActions.updateWidgetFailure({ error }),
      })
    )
  );

  deleteWIdgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.deleteWidget),
      pessimisticUpdate({
        run: (action) =>
          this.widgetService
            .delete(action.widget)
            .pipe(
              map((widget: Widget) =>
                WidgetsActions.deleteWidgetSuccess({ widget })
              )
            ),
        onError: (action, error) =>
          WidgetsActions.deleteWidgetFailure({ error }),
      })
    )
  );
}
