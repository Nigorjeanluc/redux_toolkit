/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App
