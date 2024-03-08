import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as WidgetsActions from './widgets.actions';
import { Widget } from '@nxworkshp/api-interfaces';

export const WIDGETS_FEATURE_KEY = 'widgets';

export interface WidgetsState extends EntityState<Widget> {
  selectedId?: string | number; // which Widgets record has been selected
  loaded: boolean; // has the Widgets list been loaded
  error?: string | null; // last known error (if any)
}

export interface WidgetsPartialState {
  readonly [WIDGETS_FEATURE_KEY]: WidgetsState;
}

export const widgetsAdapter: EntityAdapter<Widget> =
  createEntityAdapter<Widget>();

export const initialWidgetsState: WidgetsState = widgetsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state: any, { error }: any) => ({ ...state, error });

export const _widgetsReducer = createReducer(
  initialWidgetsState,
  on(WidgetsActions.selectWidget, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(WidgetsActions.resetSelectedWidget, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(WidgetsActions.resetWidgets, (state) => widgetsAdapter.removeAll(state)),
  // Load widgets
  on(WidgetsActions.loadWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetsFailure, onFailure),
  // Load widget
  on(WidgetsActions.loadWidget, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.upsertOne(widget, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetFailure, onFailure),
  // Add widget
  on(WidgetsActions.createWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.addOne(widget, state)
  ),
  on(WidgetsActions.createWidgetFailure, onFailure),
  // Update widget
  on(WidgetsActions.updateWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.updateOne({ id: widget.id || '', changes: widget }, state)
  ),
  on(WidgetsActions.updateWidgetFailure, onFailure),
  // Delete widget
  on(WidgetsActions.deleteWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.removeOne(widget.id || '', state)
  ),
  on(WidgetsActions.deleteWidgetFailure, onFailure)
);
