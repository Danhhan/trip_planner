import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import { selectTheme } from './slice/selectors'

const ThemeProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const theme = useSelector(selectTheme)
  return <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
}

export default ThemeProvider
