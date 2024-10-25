/* eslint-disable no-unused-vars */
/*
 * Media queries utility
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation
} from 'styled-components'

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  '375px': 375,
  '425px': 425,
  '480px': 480,
  '500px': 500,
  sm: 640,
  md: 768,
  lg: 1024,
  '1200px': 1200,
  xlg: 1280,
  xl: 1440,
  xxl: 1536,
  xxxl: 1920,
  '2k': 2048
}

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, label) => {
  // eslint-disable-next-line no-param-reassign
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `

  return acc
}, {} as { [key in keyof typeof sizes]: MediaFunction })

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>

/* Example
    const SomeDiv = styled.div`
      display: flex;
      ....
      ${media.medium`
        display: block
      `}
    `;
    */
