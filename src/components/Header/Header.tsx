import React from 'react'
import sidebarMobile from './../../public/bg-sidebar-mobile.svg'
import { Step } from './Step'

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid grid-cols-4 gap-4">{children}</div>
    </div>
  )
}
