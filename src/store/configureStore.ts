import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { reducer as reducerTheme } from '@/styles/theme/slice'

let store: ToolkitStore

export function configureAppStore(): ToolkitStore {
  store = configureStore({
    reducer: {
      theme: reducerTheme
    },
    middleware: (defaultMiddleware: () => any) => [...defaultMiddleware()],
    devTools: import.meta.env.DEV === true
  })
  return store
}

export type AppGetState = typeof store.getState
export type AppDispatch = typeof store.dispatch
