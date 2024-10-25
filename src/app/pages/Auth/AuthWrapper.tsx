import React from 'react'
// COMPs
import { Flex } from '@/app/components/Box'
import Container from '@/app/components/Layout/Container'

interface AuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <Container height="100vh">
      <Flex className="flex-col justify-center max-w-[456px]" height="100%" mx="auto">
        {children}
      </Flex>
    </Container>
  )
}

export default AuthWrapper
