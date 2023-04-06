import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import ExploreFoods from './components/ExploreFoods';
import Orders from './components/Orders';
import ErrorElement from './components/ErrorElement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/explore-foods',
        element: <ExploreFoods/>
      },
      {
        path: '/orders',
        element: <Orders/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
