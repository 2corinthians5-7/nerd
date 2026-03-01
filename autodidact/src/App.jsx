import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Account from './main/account.jsx'
import ChronoDisplay from './main/chrono-display.jsx'
import Homepage from './main/homepage.jsx'
import Leaderboard from './main/leaderboard.jsx'
import './App.css'

function App() {

  return (
    <>
      <Account/>
      <ChronoDisplay/>
      <Homepage/>
      <Leaderboard/>
    </>
  )
}

export default App
