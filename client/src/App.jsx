import Catalog, { TripsList } from "./components/tripsList/TripsList"
import { Header } from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"
import TripDetails from "./components/tripsList/tripListItem/tripDetails/TripDetails"
import Booking from "./components/booking/Booking"
import { useState } from "react"
import { createContext } from 'react'
import UserContext from "./contexts/UserContext"

const contextData = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<TripsList />} />
        <Route path="/catalog/:tripId/details" element={<TripDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </UserContext.Provider>

  )
}

export default App
