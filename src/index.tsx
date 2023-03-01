import { createRoot } from 'react-dom/client'
import './style.scss'
import App from 'components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BottomNav } from 'components/BottomNav'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '1',
        element: <BottomNav />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)
