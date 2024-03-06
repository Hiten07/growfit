import { useState } from "react";

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
            <section className="section-main">
                <div className="contact-content">
                        <h1>Contact us</h1>
                </div>

                
                <div className="container grid grid-two-cols">

                    {/* getting the image for contact */ }
                    <div className="contact-img">
                        <img src="" alt="We are always available"/>
                    </div>

                    {/* // actual contact form */}
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                type="text" 
                                name="username" 
                                id="username"
                                value={contact.username}
                                onChange={handleInput}
                                autoComplete="off"
                                required />

                                <label htmlFor="email">email</label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email"
                                value={contact.email}
                                onChange={handleInput}
                                autoComplete="off"
                                required />
                            </div>

                            <div>
                                <label htmlFor="message"> Message</label>
                                <textarea 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="10"
                                value={contact.message}
                                onChange={handleInput}
                                autoComplete="off"
                                required></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Contact;