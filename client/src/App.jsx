import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import AuthContext from "./contexts/AuthContext"


import { TripsList } from "./components/tripsList/TripsList"
import { Header } from "./components/header/Header"
import Home from "./components/home/Home"
import TripDetails from "./components/tripsList/tripListItem/tripDetails/TripDetails"
import About from "./components/about/About"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateTrip from "./components/createTrip/CreateTrip"

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state)
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<TripsList />} />
        <Route path="/catalog/:tripId/details" element={<TripDetails />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthContext.Provider>

  )
}

export default App
