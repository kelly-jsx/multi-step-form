import sidebarMobile from './../../public/bg-sidebar-mobile.svg'
import { Step } from './Step'

export const Header = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid grid-cols-4 gap-4">
        <Step step={1} currentStep />
        <Step step={2} />
        <Step step={3} />
        <Step step={4} />
      </div>
    </div>
  )
}
