import { variants } from './types'

export const styleVariants = {
  [variants.PRIMARY]: {
    color: 'white',
    backgroundColor: '#3B71FE',
    '&:hover': {
      transform: 'scale3d(1.03, 1.03, 1.03)'
    }
  },
  [variants.SECONDARY]: {
    color: 'white',
    backgroundColor: '#9F9F9F'
  }
}
