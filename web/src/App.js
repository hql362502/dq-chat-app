import React from 'react'
import {BrowserRouter} from "react-router-dom"
import GetRoutes from './route';
export default function App() {
  return (
    <BrowserRouter>
      <GetRoutes/>
    </BrowserRouter>
  )
}
