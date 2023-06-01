import React from 'react'
// Components
import Input from '@/app/components/Input'
import AuthWrapper from '../AuthWrapper'

const LoginPage: React.FC = () => {
  return (
    <AuthWrapper>
      <div>
        <Input />
      </div>
    </AuthWrapper>
  )
}

export default LoginPage
