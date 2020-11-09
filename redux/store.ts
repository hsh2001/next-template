/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createStore } from 'redux';

interface ReduxState {}

interface ReduxAction {}

const defaultState: ReduxState = {};

const store = createStore(function (
  state: ReduxState = defaultState,
  action: ReduxAction,
): ReduxState {
  return {};
});

export default store;
