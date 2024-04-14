import { NavLink } from "react-router-dom";
import "./Home.css";
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
    return (
        <>
        <div className="bg">
        
           <main>
                <section>
                    <div className="">

                        <div className="">
                            <div className="text-white">
                                    <p className="p1">Connecting <h style={{color:"orange"}}>Your</h> Life <h style={{color:"orange"}}>With</h> Fitness !</p>
                                    
                            </div>
                            <div className="">
                                <div className="para-group text-white p-4">
                                    <p className="p2">Welcome to the GrowFit..!</p>
                                    <p className="p3">Grow Fit is web-app that helps Gym Businesses<br/> To Bring Their 
                                    Business it On InternetThrough Our System.
                                    Our Web-app will connect Gym Businesses And Fitness Enthuasiasts 
                                    And Will Work As Middleware</p>

                                </div>
                                <div className="btn-group gap-5 p-4 m-5">
                                    <NavLink to="/addgym">
                                        <button className="btn btn-outline-danger text-white fs-4 p-4" style={{borderRadius:"20px"}}><AddIcon sx={{ fontSize: 20 }}/> Add GYM</button>
                                    </NavLink>

                                    <NavLink to="gyms" className="register-btn">
                                        <button className="btn btn-outline-danger  text-white p-4 fs-4" style={{borderRadius:"20px"}}>Show GYM</button>
                                    </NavLink>
                                </div>
                            </div>

                                
                        </div>
                    </div>
                </section>
           </main>
        </div>
        <div> 
            <div className="my-5">
                <p className="about-us text-center my-5">About Us</p>
                
            </div>
            <div className="container d-flex align-items-center justify-content-center flex-wrap gap-5">
                <div className="box">
                    <div className="body">
                        <div className="imgContainer">
                            <img src="/images/find-gym.jpg" alt=""/>
                        </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className=" fs-2 text-danger">Find Gym</h3>
                        <p className="fs-4 text-white"><h className="fs-4">Find a gyms that fit for you</h><br/>-Know their address,services,
                        charges and all you nedd a select a perfect for your killer workout place.</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src="/images/workout-plan.jpg" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-danger fs-2">Workout Plan</h3>
                        <p className="fs-4 text-white">Get your customized workout plan<br/>from your gym trainer from your profile.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            
            <div className="body">
                
                <div className="imgContainer">
                    
                    <img src="/images/manage-data1.jpg" alt=""/>
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-danger fs-2">Manage Data</h3>
                        <p className="fs-4 text-white">Gym Owner can easily manage and update their customers data as well as membership fee in our system.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        </div>
        
        </>
    )
}

export default Home;