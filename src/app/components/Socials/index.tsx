import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Box'
import { media } from '@/styles/media'
import { FacebookIcon, GoogleIcon, TwitterIcon } from '../Svg'

const SocialItem = styled(Flex)`
  min-width: 72.55px;
  max-width: 110px;
  padding: 7.91px 29.68px;
  border: ${prop => `1px solid ${prop.theme.grey5}`};
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 13.19px;
    height: 13.19px;
  }
  ${media['480px']`
    padding: 12px 45px;
    svg {
      width: 20px;
      height: 20px;
    }
  `}
`

const Socails: React.FC = () => {
  return (
    <Flex justifyContent="space-between" className="socials">
      <SocialItem>
        <FacebookIcon />
      </SocialItem>
      <SocialItem>
        <GoogleIcon />
      </SocialItem>
      <SocialItem>
        <TwitterIcon />
      </SocialItem>
    </Flex>
  )
}

export default Socails
