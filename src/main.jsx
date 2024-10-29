import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Datas from './Compontent/Datas/Datas.jsx';
import Header from './Compontent/Header/Header.jsx';
import Banner from './Compontent/Banner/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'/data',
        element:<Datas></Datas>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
