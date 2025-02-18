const lightTheme = {
  primary: '#3B71FE',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  borderLight: 'rgba(58,52,51,0.05)',
  border: '#9f9f9f',
  backgroundAlt: 'rgb(255, 255, 255)',
  text: '#000000',
  text1: '#333333',
  text2: '#333333',
  tooltipText: '#ffffff',
  grey: '#EFEFEF',
  grey1: '#23262F',
  grey2: '#353945',
  grey3: '#777E91',
  grey4: '#B1B5C4',
  grey5: '#E6E8EC',
  card: '#ffffff',
  red1: '#7c0b12',
  strokeColor: '#111827',
  black: '#000000',
  overlay: 'rgba(28,26,26,0.6)',
  shadow: 'rgba(0, 0, 0, 0.15)',
  gradient: 'linear-gradient(90deg, #BA6268 0.55%, #A8BBCD 100%)',
  toggleBackground: 'rgb(189, 194, 196)',
  skeletonBase: '#ebebeb',
  skeletonHighlight: '#f5f5f5'
}

const darkTheme: Theme = {
  primary: '#BA6268',
  background: '#100A35',
  backgroundVariant: 'rgba(28,26,26,1)',
  borderLight: 'rgba(241,233,231,0.05)',
  border: '#9f9f9f',
  backgroundAlt: 'rgb(39, 38, 44)',
  text: '#ffffff',
  text1: '#333333',
  text2: '#ffffff',
  tooltipText: '#333333',
  grey: '#EFEFEF',
  grey1: '#23262F',
  grey2: '#353945',
  grey3: '#777E91',
  grey4: '#B1B5C4',
  grey5: '#E6E8EC',
  card: '#ffffff',
  red1: '#7c0b12',
  black: '#000000',
  strokeColor: '#ffffff',
  overlay: 'rgba(16, 10, 53, 0.8)',
  shadow: 'rgba(0, 0, 0, 0.15)',
  gradient: 'linear-gradient(90deg, #BA6268 0.55%, #A8BBCD 100%)',
  toggleBackground: 'rgb(102, 97, 113)',
  skeletonBase: '#ebebeb',
  skeletonHighlight: '#f5f5f5'
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme
}
