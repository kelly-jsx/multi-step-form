import { Outlet } from 'react-router-dom'
import sidebarMobile from './../public/bg-sidebar-mobile.svg'
import { BottomNav } from './BottomNav'

import { Step1 } from 'pages/Step1'
import { Step2 } from 'pages/Step2'
import { Step3 } from 'pages/Step3'
import { Step4 } from 'pages/Step4'
import { Step5 } from 'pages/Step5'

import { Form } from './Form/Form'
import { Header } from './Header/Header'
import { Step } from './Header/Step'

const steps = ['Your Info', 'Select plan', 'ADD-ONS', 'Summary']

const curr = 1

function App() {
  return (
    <div className="h-screen w-screen bg-mangolia">
      <div
        className="flex h-screen w-screen flex-col items-center gap-8 px-4 pt-8"
        style={{
          backgroundImage: `url(${sidebarMobile})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      >
        <div className="flex lg:hidden">
          <Header>
            {steps.map((description: string, index: number) => (
              <Step
                step={index + 1}
                key={index}
                currentStep={index == curr - 1}
              />
            ))}
          </Header>
        </div>
        <div className="self-center">
          <Step1 steps={steps} curr={curr} />
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default App
