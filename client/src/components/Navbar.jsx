import { NavLink } from "react-router-dom";  
import "./Navbar.css";
const Navbar = () => {
    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">GROW FIT</NavLink>
                </div>

                <nav className="bg-gray-800">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/register">
                                Register
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    </nav>
                </div>
        </header>
        </>
    )
}

export default Navbar