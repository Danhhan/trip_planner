import React from 'react'

interface AuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center h-screen">
      <div className="max-w-[456px] mx-auto">{children}</div>
    </div>
  )
}

export default AuthWrapper
