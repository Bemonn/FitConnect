import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Trainers from './components/Trainers.jsx'

const router = createBrowserRouter([
  {path: "/",
  element: <App/>,
  errorElement: <h1>ERROR!</h1>,
  children:[
    {
      index: true,
      element: <Home/>
    },
    {
      path: "/trainers",
      element: <Trainers/>,
    }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router = {router}/>
)