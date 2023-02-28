import sidebarMobile from './../public/bg-sidebar-mobile.svg'

import { Header } from './Header/Header'

function App() {
  return (
    <div className="h-screen w-screen bg-mangolia">
      <div
        className="flex h-screen w-screen flex-col items-center gap-8 pt-8"
        style={{
          backgroundImage: `url(${sidebarMobile})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <div className="w-max bg-white">
          <p>Form</p>
        </div>
      </div>
    </div>
  )
}

export default App
