import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="bg">
        
           <main>
                <section>
                    <div className="">

                        <div className="">
                            <div className="text-white">
                                    <p className="p1">Connecting Your Life With Fitness !</p>
                                    
                            </div>
                            <div className="">
                                <div className="para-group text-white">
                                    <p className="p2">Welcome to the GrowFit..!</p>
                                    <p className="p3">Grow Fit is web-app that helps Gym Businesses<br/> To Bring Their 
                                    Business it On InternetThrough Our System.<br/>
                                    Our Web-app will connect Gym Businesses<br/> And Fitness Enthuasiasts 
                                    And Will Work As Middleware</p>

                                </div>
                                <div className="btn-group gap-5 ">
                                    <NavLink to="\register">
                                        <button className="btn btn-danger text-white fs-5">Register Now</button>
                                    </NavLink>

                                    <NavLink to="\contact">
                                        <button className="btn btn-danger text-white fs-5">Connect With Us</button>
                                    </NavLink>
                                </div>
                            </div>

                                
                        </div>
                    </div>
                </section>
           </main>
        </div>
        </>
    )
}

export default Home;