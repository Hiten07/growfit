import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import Navbar from "./components/Navbar.jsx"
import Addgym from "./Pages/Addgym.jsx"
import Gyms from "./Pages/Gyms.jsx"
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
<<<<<<< HEAD
            <Route path="/addgym" Component={Addgym} />
            <Route path="/gyms" Component={Gyms} />
=======
            <Route path="/logout" Component={Logout} />
>>>>>>> 3c9d0a4dcc758ede7eb58ee8ced15305d816621b
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
