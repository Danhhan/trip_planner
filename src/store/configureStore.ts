import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { reducer as reducerTheme } from '@/styles/theme/slice'
import authSlice from '@/state/auth/authSlice'
import { apiSlice } from '@/services/modules/auth'

let store: ToolkitStore

export function configureAppStore(): ToolkitStore {
  store = configureStore({
    reducer: {
      theme: reducerTheme,
      auth: authSlice,
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.DEV === true
  })
  return store
}

export type AppGetState = typeof store.getState
export type AppDispatch = typeof store.dispatch
