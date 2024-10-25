import { HTMLAttributes } from 'react'
import { SpaceProps } from 'styled-system'

export interface InputProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {}

export interface InputGroupProps extends SpaceProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}
