import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Properties from './components/properties'
import Footer from './components/footer'
import Reviews from './components/reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
