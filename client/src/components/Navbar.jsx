import { NavLink } from "react-router-dom";  
import "./Navbar.css";
const Navbar = () => {
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-sm py-3">
                <div className="container-fluid h-50">
                    <div className="navbar-brand">
                        <NavLink className="fs-1 text-white w-400 ml-5 text-decoration-none" to="/">GROW FIT</NavLink>
                    </div>
                        <div className="h-50">
                            
                            <ul className="navbar-nav me-5 gap-5">
                                <li className="nav-item">
                                    <NavLink id="nav-link" className="nav-link btn btn-link fs-3 text-white px-3 py-3.5" to="/">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink id="nav-link" className="nav-link fs-3 text-white  px-3 py-3.5  hover-overlay hover:rounded-md" to="/about">
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink id="nav-link" className="nav-link fs-3 text-white  px-3 py-3.5  hover-overlay hover:rounded-md" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink id="nav-link" className="nav-link fs-3 text-white  px-3 py-3.5  hover-overlay hover:rounded-md" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink id="nav-link" className="nav-link fs-3 text-white  px-3 py-3.5  hover-overlay hover:rounded-md" to="/login">
                                        Login
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