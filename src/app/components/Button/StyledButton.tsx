import styled from 'styled-components'
import { space, layout, variant, typography } from 'styled-system'
import { BaseButtonProps } from './types'
import { styleVariants } from './theme'

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  display: inline-flex;
  border: 0;
  outline: none !important;
  box-shadow: none !important;
  pointer-events: all;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
  color: ${p => p.theme.text};

  ${p =>
    p.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      opacity: 0.5;
    }
  `}

  ${variant({
    variants: styleVariants
  })}
  ${layout}
  ${space}
  ${typography}
`

export default StyledButton
