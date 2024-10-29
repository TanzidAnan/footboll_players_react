import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Datas from './Compontent/Datas/Datas.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    loader:() =>(`https://raw.githubusercontent.com/TanzidAnan/retro-forum/refs/heads/main/fake.json`),
    element: <Datas></Datas>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
