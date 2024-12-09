import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createStateSyncMiddleware } from 'redux-state-sync'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import combineReducer from './reducer'
import localForage from 'localforage'

const persistConfig = {
  key: 'hrpro',
  storage: localForage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_SECRET_KEY || '',
      onError: (error) => {
        console.log('ERROR', error)
      }
    })
  ]
}

const persistedReducer = persistReducer(persistConfig, combineReducer)

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    state = {
      ...state,
    }
  }
  return persistedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat([
      createStateSyncMiddleware({
        channel: 'hrpro',
        broadcastChannelOption: { type: 'localstorage', webWorkerSupport: false },
        blacklist: ['persist/PERSIST', 'persist/PURGE', 'persist/REHYDRATE']
      })
    ])
})

export const persistor = persistStore(store)

export const useAppDispatch = () => useDispatch()