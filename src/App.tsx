import { useState } from 'react'
import './App.css'
import Controls from './components/Controls/Controls'
import Display from './components/Display/Display'

function App() {
  
  return (
    <div className="App">
      <Controls />
      <Display/>
    </div>
  )
}

export default App
