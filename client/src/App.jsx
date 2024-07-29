import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"


import { TripsList } from "./components/tripsList/TripsList"
import { Header } from "./components/header/Header"
import Home from "./components/home/Home"
import TripDetails from "./components/tripsList/tripListItem/tripDetails/TripDetails"
import About from "./components/about/About"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateTrip from "./components/createTrip/CreateTrip"
import Logout from "./components/logout/Logout"

function App() {


  return (
    <AuthContextProvider >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/catalog" element={<TripsList />} />
        <Route path="/catalog/:tripId/details" element={<TripDetails />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AuthContextProvider>

  )
}

export default App
