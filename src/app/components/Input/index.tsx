import styled from 'styled-components'
import { space } from 'styled-system'
import { InputProps } from './types'

const Input = styled.input<InputProps>`
  height: 48px;
  border: ${prop => `1px solid ${prop.theme.grey4}`};
  width: 100%;
  border-radius: 6px;
  padding: 12px 20px;
  outline: none;
  ${space}
`

export default Input
