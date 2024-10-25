import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// Components
import { Box, Flex } from '@/app/components/Box'
import Heading from '@/app/components/Heading'
import Input from '@/app/components/Input'
import Text from '@/app/components/Text'
import AuthWrapper from '../AuthWrapper'
import { Checkbox } from '@/app/components/Checkbox'
import Socails from '@/app/components/Socials'
import { InputGroup } from '@/app/components/Input/InputGroup'
import Button from '@/app/components/Button'

import { messages } from '../messages'
import { useLoginMutation } from '@/services/modules/auth/loginMutation'
import { setCredentials } from '@/state/auth/authSlice'
import { EyeIcon } from '@/app/components/Svg'
import { media } from '@/styles/media'

export const StyledContainer = styled.div`
  padding: 48px 40px;
  border: 0.5px solid #e6e8ec;
  box-shadow: 0px 20px 60px -6px rgba(40, 40, 40, 0.08);
  border-radius: 20px;
  .login-with-email-wrap {
    position: relative;
    text-align: center;
    margin: 24px 0;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      line-height: 13px;
      font-size: 9px;
    }
    &::before {
      content: '';
      position: absolute;
      background-color: ${p => p.theme.grey5};
      height: 1px;
      width: 68px;
      left: 0%;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: ${p => p.theme.grey5};
      height: 1px;
      width: 68px;
      right: 0%;
    }
    ${media.lg`
      &::before, &::after {
        width: 104px;
      }
    `}
  }
`

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
    } catch (err: any) {
      console.error(err?.data?.message || err.error)
    }
  }
  return (
    <AuthWrapper>
      <StyledContainer>
        <Heading scale="md" textAlign="center" className="!font-medium md:!font-semibold">
          {t(messages["Get's Started"]())}
        </Heading>
        <Box className="text-center" mb="24px">
          <Text fontSize="12px" as="span" mr="8px" className="md:!text-lg">
            {t(messages["Don't have an account"]())}
          </Text>
          <Link to="/">
            <Text fontSize="12px" as="span" mr="8px" className="md:!text-lg" color="primary">
              {t(messages['Sign up']())}
            </Text>
          </Link>
        </Box>
        <Socails />
        <Box className="login-with-email-wrap">
          <Text color="grey3" as="span">
            or login with email
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex-1">
              <Text mb="10px" fontSize="16px" fontWeight={500} lineHeight="24px" as="label" display="block">
                {t(messages.Email())}
              </Text>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder={`${t(messages.Email())}`}
              />
            </div>
            <div className="flex-1 mt-[18px]">
              <Text mb="10px" fontSize="16px" fontWeight={500} lineHeight="24px" as="label" display="block">
                {t(messages.Password())}
              </Text>
              <InputGroup endIcon={<EyeIcon />}>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder={`${t(messages.Password())}`}
                />
              </InputGroup>
            </div>
            <Flex justifyContent="space-between" mt={18} mb={24}>
              <Flex alignItems="center">
                <Checkbox />
                <Text as="span" mr="8px" ml="8px" className="!text-[9.2px] md:text-[14px]">
                  {t(messages['Remember me']())}
                </Text>
              </Flex>
              <Link to="/">
                <Text as="span" color="primary" className="!text-[9.2px] md:text-[14px]">
                  {t(messages['Forgot your password']())}?
                </Text>
              </Link>
            </Flex>
            <Button type="submit" variant="primary" className="h-[30px] md:h-12">
              <span className="!text-[10px] md:text-[16px]">{t(messages['Sign in']())}</span>
            </Button>
          </div>
        </form>
      </StyledContainer>
    </AuthWrapper>
  )
}

export default LoginPage
