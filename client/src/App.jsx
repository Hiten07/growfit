import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import Navbar from "./components/Navbar.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Logout} from "./Pages/Logout.jsx";



function App() {

  return (
    <>  
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/gyms" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/logout" Component={Logout} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
