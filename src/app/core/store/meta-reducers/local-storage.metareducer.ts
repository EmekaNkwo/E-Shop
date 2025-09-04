import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { saveState, loadState } from '../../utils/local-storage';

export function localStorageMetaReducer<S, A extends { type: string }>(
  reducer: ActionReducer<S, A>
): ActionReducer<S, A> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const loadedState = loadState<S>('appState');
      if (loadedState) {
        return { ...state, ...loadedState };
      }
    }

    const nextState = reducer(state, action);

    saveState('appState', {
      cart: (nextState as any).cart,
      wishlist: (nextState as any).wishlist,
      auth: (nextState as any).auth,
      profile: (nextState as any).profile,
      orders: (nextState as any).orders,
    });

    return nextState;
  };
}
