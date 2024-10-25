/* eslint-disable no-unused-expressions */
import { ElementType } from 'react'
import { ButtonProps } from './types'
import StyledButton from './StyledButton'

function Button<E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element {
  const { id, children, variant, onClick, disabled, ...rest } = props

  return (
    <StyledButton
      id={id}
      variant={variant}
      disabled={disabled}
      onClick={e => {
        onClick && !disabled && onClick(e)
      }}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  external: false
}

export default Button
