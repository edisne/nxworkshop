import { WidgetsEntity } from './widgets.models';
import {
  widgetsAdapter,
  WidgetsPartialState,
  initialWidgetsState,
} from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

describe('Widgets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getWidgetsId = (it: WidgetsEntity) => it.id;
  const createWidgetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as WidgetsEntity);

  let state: WidgetsPartialState;

  beforeEach(() => {
    state = {
      widgets: widgetsAdapter.setAll(
        [
          createWidgetsEntity('PRODUCT-AAA'),
          createWidgetsEntity('PRODUCT-BBB'),
          createWidgetsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialWidgetsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Widgets Selectors', () => {
    it('selectAllWidgets() should return the list of Widgets', () => {
      const results = WidgetsSelectors.selectAllWidgets(state);
      const selId = getWidgetsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = WidgetsSelectors.selectEntity(state) as WidgetsEntity;
      const selId = getWidgetsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectWidgetsLoaded() should return the current "loaded" status', () => {
      const result = WidgetsSelectors.selectWidgetsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectWidgetsError() should return the current "error" state', () => {
      const result = WidgetsSelectors.selectWidgetsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
