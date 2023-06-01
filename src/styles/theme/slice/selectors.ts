import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/types/RootState'
import { initialState } from '.'
import { isSystemDark } from '../utils'
import { themes } from '../themes'

export const selectTheme = createSelector([(state: RootState) => state.theme || initialState], theme => {
  if (theme.selected === 'system') {
    return isSystemDark ? themes.dark : themes.light
  }
  return themes[theme.selected]
})

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected
)
