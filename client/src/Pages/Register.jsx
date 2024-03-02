import { useState } from "react";
import "./Registration.css";

const Register = () => {

    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
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
                            <h1 className="">Registration Form</h1>

                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id="username"
                                        required
                                        placeholder="username" 
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />

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

                                    <label htmlFor="phone">number</label>
                                    <input 
                                        type="phone"
                                        maxLength={10}
                                        name="phone" 
                                        id="phone"
                                        placeholder="enter your number"
                                        required 
                                        value={user.phone}
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

                                    <label htmlFor="password">confirm password</label>
                                    <input 
                                        type="password" 
                                        name="cpassword" 
                                        id="cpassword"
                                        placeholder="confirm password"
                                        required 
                                        value={user.cpassword}
                                        onChange={handleInput}
                                    /> 
                                </div>

                                <br/>

                                <button 
                                type="submit"
                                value="submit now"
                                >
                                    Register now
                                </button>
                                    
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