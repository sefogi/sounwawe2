import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'react-dom/client';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
