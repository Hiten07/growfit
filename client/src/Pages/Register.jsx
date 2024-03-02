import "./Registration.css";

const Register = () => {
    return (
        <>
        <section>
            <main>
                <div className="grid grid-cols-1 ">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="registration-image">
                            <img src="/images/registration.svg" alt="Registration-image" width="500" height="500">
                            </img>
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Register;