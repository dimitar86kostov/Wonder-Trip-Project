import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"


import TripsList from "./components/tripsList/TripsList"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateTrip from "./components/createTrip/CreateTrip"
import Logout from "./components/logout/Logout"
import Edit from "./components/edit/Edit"
import Delete from "./components/delete/Delete"
import Footer from "./components/footer/Footer"
import NotFound from "./components/404/NotFound"
import EditComment from "./components/details/comments/editComment/EditComment"
import ErrorBoundary from './components/ErrorBoundary'

function App() {


  return (
    <AuthContextProvider >
      <Header />

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog" element={<TripsList />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/catalog/:tripId/*" element={<Details />} />
          <Route path="/catalog/:tripId/edit" element={<Edit />} />
          <Route path="/catalog/:tripId/comment/:commentId/edit" element={<EditComment />} />
          <Route path="/catalog/:tripId/delete" element={<Delete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </AuthContextProvider>

  )
}

export default App
