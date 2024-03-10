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
                <div className="container m-5 mx-auto">
                    <div className="row justify-content-md-center">
                        <div className="image col">
                            <img src="/images/login.svg" alt="Registration-image" width="500" height="500">
                            </img>
                        </div>
                        <div className="col mt-5">
                            <h1 className="fs-1 text-center mt-5">Login</h1>

                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div className=" shadow-lg p-5 rounded">
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="email">Email</label>
                                        <input 
                                        className="form-control form-control-lg fs-4 "
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="Enter your email"
                                        required 
                                        value={user.email}
                                        onChange={handleInput}
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group ">
                                        <label className="mb-1 fs-2" htmlFor="password">password</label>
                                        <input
                                        className="form-control form-control-lg fs-4 " 
                                        type="password" 
                                        name="password" 
                                        id="password"
                                        placeholder="Password"
                                        required 
                                        value={user.password}
                                        onChange={handleInput}
                                        />
                                    </div>
                                    
                                <br/>
                                <button
                                className="btn btn-danger fs-4 px-3 py-2" 
                                type="submit"
                                value="Submit now"
                                >
                                    Login
                                </button> 
                                <br/>
                                <br/>
                                <div className="inline row justify-content-md-center">
                                    <h4>Don't have an acccount?</h4>
                                    <NavLink className="fs-4" to="/register">Register here</NavLink>  
                                </div>
                                
                            </div>
                                   
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Login;