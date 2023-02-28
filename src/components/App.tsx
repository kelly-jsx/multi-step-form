import sidebarMobile from './../public/bg-sidebar-mobile.svg'

import { Form } from './Form/Form'
import { Header } from './Header/Header'

function App() {
  return (
    <div className="h-screen w-screen bg-mangolia">
      <div
        className="flex h-screen w-screen flex-col items-center gap-8 px-4 pt-8"
        style={{
          backgroundImage: `url(${sidebarMobile})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default App
