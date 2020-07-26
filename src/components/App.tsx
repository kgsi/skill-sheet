import React from 'react'
import Header from './Header'
import { NextComponentType } from 'next'

const App: NextComponentType = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
