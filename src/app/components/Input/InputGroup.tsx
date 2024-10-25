import React from 'react'
import styled from 'styled-components'
import { InputGroupProps } from './types'
import { Box } from '../Box'

const InputIcon = styled.div<{ isEndIcon?: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  top: 0;
  ${({ isEndIcon }) => (isEndIcon ? `right: 14px` : `left: 14px`)}
`
export const InputGroup: React.FC<InputGroupProps> = ({ startIcon, children, endIcon }) => {
  return (
    <Box position="relative">
      {startIcon && <InputIcon>{startIcon}</InputIcon>}
      {children}
      {endIcon && <InputIcon isEndIcon>{endIcon}</InputIcon>}
    </Box>
  )
}
