import { Outlet } from 'react-router-dom'
import sidebarMobile from './../public/bg-sidebar-mobile.svg'
import { BottomNav } from './BottomNav'

import { Form } from './Form/Form'
import { Header } from './Header/Header'

// TO DO - Router React Dom

function App() {
  return (
    <div className="h-screen w-screen bg-mangolia">
      <div
        className="flex h-max w-screen flex-col items-center gap-8 px-4 pt-8"
        style={{
          backgroundImage: `url(${sidebarMobile})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <Form />
        <BottomNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
