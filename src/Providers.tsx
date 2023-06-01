import React from 'react'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import ThemeProvider from '@/styles/theme/ThemeProvider'

const Providers: React.FC<React.PropsWithChildren<{ store: Store; children: React.ReactNode }>> = ({
  store,
  children
}) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

export default Providers
