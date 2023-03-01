import { Outlet } from 'react-router-dom'
import sidebarMobile from './../public/bg-sidebar-mobile.svg'
import { BottomNav } from './BottomNav'

import { Form } from './Form/Form'
import { Header } from './Header/Header'
import { Step } from './Header/Step'

const steps = ['Your Info', 'Select plan', 'ADD-ONS', 'Summary']

const curr = 1

function App() {
  return (
    <div className="h-screen w-screen bg-mangolia">
      <div
        className="flex h-max w-screen flex-col items-center gap-8 px-4 pt-8"
        style={{
          backgroundImage: `url(${sidebarMobile})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      >
        <Header>
          {steps.map((description: string, index: number) => (
            <Step
              step={index + 1}
              key={index}
              currentStep={index == curr - 1}
            />
          ))}
        </Header>
        <Form />
        <div>
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default App
