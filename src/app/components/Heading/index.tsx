import styled from 'styled-components'
import { tags, scales, HeadingProps } from './types'
import Text from '../Text'

const style = {
  [scales.MD]: {
    fontSize: '20px',
    fontSizeLg: '30px'
  },
  [scales.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px'
  },
  [scales.XL]: {
    fontSize: '30px',
    fontSizeLg: '40px'
  },
  [scales.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px'
  }
}

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: 600;
  line-height: ${({ lineHeight }) => lineHeight};
`

Heading.defaultProps = {
  as: tags.H2,
  lineHeight: 1.1
}

export default Heading
