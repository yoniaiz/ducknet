import { merge, omit } from 'ramda';
import create from 'zustand';

type Filters = Record<string, boolean>;

interface State {
  filters: Filters;
  toggleFilter: (filter: string) => void;
  removeFilter: (filter: string | string[]) => void;
}

const useStore = create<State>((set) => ({
  filters: {},
  toggleFilter: (filter) =>
    set((state) => ({
      filters: state.filters[filter]
        ? omit([filter], state.filters)
        : merge(state.filters, { [filter]: true }),
    })),
  removeFilter: (filter) =>
    set((state) => ({ filters: omit(Array.isArray(filter) ? filter : [filter], state.filters) })),
}));

export default useStore;
