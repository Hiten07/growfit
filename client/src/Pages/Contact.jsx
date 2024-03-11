import { useState } from "react";
import "./Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue } from "@mui/material/colors";

const Contact = () => {

    const [contact,setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(contact);
        console.log(contact)
    }

    const handleInput = (e) => {
            let name = e.target.name;
            let value = e.target.value;

            setContact({
                ...contact,
                [name]: value
            })
    }

    return (
        <>
            <section>
                <main>
                
                    <div className="container m-5 mx-auto">
                        <div className="row justify-content-md-center">
                            <div className="image col">
                                <img src="/images/contact-us.svg" alt="Registration-image" width="500" height="500"></img>
                            </div>
                            <div className="col mt-5"> 
                                <h1 className="text-center mt-5">Contact Us</h1>

                                <br/>

                                    <form onSubmit={handleSubmit}>
                                    <div className="shadow-lg p-5 rounded">
                                        <div className="form-gruop mb-4">
                                            <label className="mb-1 fs-2" htmlFor="username">Username</label>
                                            <input 
                                            className="form-control form-control-lg fs-4"
                                            type="text" 
                                            name="username" 
                                            id="username"
                                            placeholder="Enter a username"
                                            value={contact.username}
                                            onChange={handleInput}
                                            autoComplete="off"
                                            required />
                                        </div> 
                                        
                                        <div className="form-gruop mb-4">
                                            <label className="mb-1 fs-2" htmlFor="email">Email</label>
                                            <input 
                                            className="form-control form-control-lg fs-4"
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            placeholder="Enter a email"
                                            value={contact.email}
                                            onChange={handleInput}
                                            autoComplete="off"
                                            required />
                                        </div>
                                        <div className="form-gruop mb-4">
                                            <label className="mb-1 fs-2" htmlFor="message"> Message</label>
                                            <textarea 
                                            className="form-control form-control-lg fs-4"
                                            name="message" 
                                            id="message" 
                                            cols="30" 
                                            rows="10"
                                            placeholder="Enter your message : "
                                            value={contact.message}
                                            onChange={handleInput}
                                            autoComplete="off"
                                            required></textarea>
                                        </div>
                                        <br/>
                                        <button className="btn btn-danger fs-4 px-3 py-2" type="submit">Submit</button>
                                        <br/><br/>
                                        
                                        <div className="social-connect form-gruop text-center">
                                            <h3>You can also connect with us</h3><br/>
                                            <InstagramIcon className="social-icon" sx={{ fontSize: 25,marginX:2,cursor:"pointer" }}/>
                                            <FacebookIcon className="social-icon" sx={{ fontSize: 25,marginX:2,cursor:"pointer" }}/>
                                            <TwitterIcon className="social-icon" sx={{ fontSize: 25,marginX:2,cursor:"pointer" }}/>
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

export default Contact;