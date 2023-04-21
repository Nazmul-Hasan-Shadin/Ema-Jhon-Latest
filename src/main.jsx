import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './component/Shop/Shop'

import Inventory from './component/Inventory/Inventory'
import Login from './component/Login/Login'
import Checkout from './component/Checkout/Checkout'
import Home from './component/Layout/Home'
import Header from './component/Header/Header'
import Order from './component/Order/Order'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>

      },
      {
        path:'/orders',
        element: <Order></Order>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'login',
        element:<Login></Login>
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
