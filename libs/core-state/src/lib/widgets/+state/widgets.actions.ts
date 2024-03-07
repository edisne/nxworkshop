import { createAction, props } from '@ngrx/store';
import { Widget } from '@nxworkshp/api-interfaces';

export const initWidgets = createAction('[Widgets Page] Init');

export const resetSelectedWidget = createAction(
  '[Widgets] Reset Selected Widget'
);
export const resetWidgets = createAction('[Widgets] Reset Widgets');

export const loadWidgetsSuccess = createAction(
  '[Widgets/API] Load Widgets Success',
  props<{ widgets: Widget[] }>()
);

export const loadWidgetsFailure = createAction(
  '[Widgets/API] Load Widgets Failure',
  props<{ error: any }>()
);

export const createWidget = createAction(
  '[Widgets/API] Create Widget',
  props<{ widget: Widget }>()
);

export const createWidgetSuccess = createAction(
  '[Widgets/API] Create Widget Success',
  props<{ widget: Widget }>()
);

export const createWidgetFailure = createAction(
  '[Widgets/API] Create Widget Failure',
  props<{ error: any }>()
);

export const updateWidget = createAction(
  '[Widgets/API] Update Widget',
  props<{ widget: Widget }>()
);

export const updateWidgetSuccess = createAction(
  '[Widgets/API] Update Widget Success',
  props<{ widget: Widget }>()
);

export const updateWidgetFailure = createAction(
  '[Widgets] Update Widget Failure',
  props<{ error: any }>()
);

export const deleteWidget = createAction(
  '[Widgets/API] Delete Widget',
  props<{ widget: Widget }>()
);

export const deleteWidgetCancelled = createAction(
  '[Widgets] Delete Widget Cancelled'
);

export const deleteWidgetSuccess = createAction(
  '[Widgets] Delete Widget Success',
  props<{ widget: Widget }>()
);

export const deleteWidgetFailure = createAction(
  '[Widgets] Delete Widget Failure',
  props<{ error: any }>()
);

export const selectWidget = createAction(
  '[Widgets] Select Widget',
  props<{ selectedId: string }>()
);

export const loadWidget = createAction(
  '[Widgets/API] Load Widget',
  props<{ widgetId: string }>()
);

export const loadWidgetSuccess = createAction(
  '[Widgets/API] Load Widget Success',
  props<{ widget: Widget }>()
);

export const loadWidgetFailure = createAction(
  '[Widgets/API] Load Widget Failure',
  props<{ error: any }>()
);

export const loadWidgets = createAction('[Widgets/API] Load Widgets');
