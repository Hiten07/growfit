import { NavLink } from "react-router-dom";  
import "./Navbar.css";
const Navbar = () => {
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-sm bg-dark">
                <div className="container-fluid h-50">
                    <div className="navbar-brand">
                        <NavLink className="fs-1 text-white w-400 ml-5" to="/">GROW FIT</NavLink>
                    </div>
                        <div className="h-50">
                            
                            <ul className="navbar-nav me-5 gap-5">
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-link fs-2 text-white px-4 hover:bg-white hover:bg-gray-700 hover:rounded-md" to="/">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link fs-2 text-white  px-4 hover:bg-white hover:bg-gray-700 hover:rounded-md" to="/register">
                                        Register
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link fs-2 text-white  px-4 hover:bg-white hover:bg-gray-700 hover:rounded-md" to="/login">
                                        Login
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link fs-2 text-white  px-4 hover:bg-white hover:bg-gray-700 hover:rounded-md" to="/about">
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link fs-2 text-white  px-4 hover:bg-white hover:bg-gray-700 hover:rounded-md" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        
                        </div>
                
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar