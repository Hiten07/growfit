import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    
    const [user,setUser] = useState({
        email: "",
        password: "",
    })

    // handing the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user);
        console.log(user);
    }

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    return (
        <>
        <section>
            <main>
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="registration-image">
                            <img src="/images/registration.png" alt="Registration-image" width="500" height="500">
                            </img>
                        </div>
                        <div className="">
                            <h1 className="">Login</h1>

                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="enter your email"
                                        required 
                                        value={user.email}
                                        onChange={handleInput}
                                    />

                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password"
                                        placeholder="password"
                                        required 
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                <br/>
                            </div>
                                <button 
                                type="submit"
                                value="submit now"
                                >
                                    Register now
                                </button>      
                            </form>
                            
                            <h4>Don't have an acccount?</h4>
                            <NavLink to="/register">Register here</NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Login;