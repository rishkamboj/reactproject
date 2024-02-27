import { useState } from 'react'
import {Headers} from './components/headers'
import {Mid} from './components/mid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Line } from './components/line'
import { Tool } from './components/tools'
import { Footer } from './components/footer'

function App() {


  return (
    <>
  <Headers/>
  <Mid></Mid>
  <Line/>
  <Tool/>
  <Footer/>
      </>
  )
}

export default App
