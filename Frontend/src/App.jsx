import { useState } from 'react'

import './App.css'
import AppRoutes from './AppRoutes'
import AuthError from './components/AuthError'

function App() {


  return (
    <>
      <AppRoutes />
      <AuthError />
    </>
  )
}

export default App
