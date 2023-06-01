import { ThemeKeyType } from './types'

export const isSystemDark = window.matchMedia ? window.matchMedia('prefers-color-scheme: dark')?.matches : undefined

export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage ? (localStorage.getItem('selectedThem') as ThemeKeyType) || null : null
}
