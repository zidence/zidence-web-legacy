import { configureStore } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'

import rootReducer from './slices/rootReducer'

import { saveState, loadState } from '../utils/localStorage'

const preLoadedState = loadState()

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preLoadedState,
})

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 1000)
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./slices/rootReducer', () => {
    const newRootReducer = require('./slices/rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
