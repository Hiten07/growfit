const Home = () => {
    return (
        <>
           <main>
                <section>
                    <div className="home-section">

                        <div className="image-home">
                            <img src="./images/registration.png"
                                alt="home page"
                                width={400}
                                height={400}
                            >
                            </img>
                        </div>

                        <div className="container grid grid-cols-2">
                            <div className="home-content">
                                    <p>Connecting your life with fitness !</p>
                                    <h1>Welcome to the GrowFit</h1>
                                    <p>Grow Fit is web-app that helps Gym Businesses To Bring Their 
                                    Business it On InternetThrough Our System.
                                    Our Web-app will connect Gym Businesses And Fitness Enthuasiasts 
                                    And Will Work As Middleware.</p>
                            </div>

                            <div className="btn-group">
                                <a href="\register">
                                    <button className="btn">Register Now</button>
                                </a>

                                <a href="\contact">
                                    <button className="btn">Connect With Us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
           </main>
        </>
    )
}

export default Home;