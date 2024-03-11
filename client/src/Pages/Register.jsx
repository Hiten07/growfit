import { useState } from "react";
import "./Registration.css";

const Register = () => {

    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        userType: "",
        password: "",
        cpassword: "",
    })

    // handing the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
        });  
            console.log(response);
        } 
        
        catch (error) {
            console.log("Register: ", error);   
        }
    };

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
                        <div className="col">
                            <img src="/images/registration.svg" alt="Registration-image" width="500" height="500">
                            </img>
                        </div>
                        <div className="col">
                            <h1 className="text-center">Registration Form</h1>

                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div className="shadow-lg p-5 rounded">
                                    <div className="form-gruop">
                                        <label className="mb-1 fs-2" htmlFor="username">Username</label>
                                        <input 
                                        className="form-control form-control-lg fs-4 "
                                        type="text" 
                                        name="username" 
                                        id="username"
                                        required
                                        placeholder="Username" 
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                        /><br/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="email">Email</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                        required 
                                        value={user.email}
                                        onChange={handleInput}
                                        />
                                        <small id="emailHelp" className="form-text text-muted mb-4">We'll never share your email with anyone else.</small><br/>
                                    </div><br/>
                                    
                                    <div className="form-goup">
                                        <label className="mb-1 fs-2" htmlFor="phone">Number</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="phone"
                                        maxLength={10}
                                        name="phone" 
                                        id="phone"
                                        placeholder="Enter your number"
                                        autoComplete="off"
                                        required 
                                        value={user.phone}
                                        onChange={handleInput}
                                        /><br/>
                                    </div>
                                    <div className="radio fs-2 mb-2">Join As a<br/>
                                        <label className="mb-1 fs-4 pe-4" htmlFor="radio1">
                                            <input 
                                            type="radio" 
                                            name="userType"
                                            id="radio1" 
                                            value="customer"
                                            onChange={handleInput}
                                            
                                            />
                                            customer
                                        </label>

                                        <label className="mb-1 fs-4" htmlFor="radio2">
                                            <input 
                                            type="radio"
                                            name="userType"
                                            id="radio2" 
                                            value="gym-owner"
                                            onChange={handleInput}
                                            defaultChecked
                                            />
                                            gym-owner
                                        </label>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="password">Password</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="password" 
                                        name="password" 
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        required 
                                        value={user.password}
                                        onChange={handleInput}
                                        /><br/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="cpassword">Confirm password</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="password" 
                                        name="cpassword" 
                                        id="cpassword"
                                        placeholder="Confirm password"
                                        autoComplete="off"
                                        required 
                                        value={user.cpassword}
                                        onChange={handleInput}
                                        /> <br/>
                                    </div>
                                    <br/>

                                <button 
                                className="btn btn-danger fs-4 px-3 py-2"
                                type="submit"
                                value="Submit now"
                                >
                                    Register
                                </button>
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

export default Register;