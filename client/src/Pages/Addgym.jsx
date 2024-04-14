const Addgym = () => {
    return(
        <>     
            <section>
            <main>
                <div className="container m-5 mx-auto">
                    <div className="row justify-content-md-center">
                        <div className="image col">
                            <img src="/images/add_gym.svg" alt="Add-gym-image" width="500" height="500">
                            </img>
                        </div>
                        <div className="col mt-5">
                            <h1 className="text-center mt-5">ADD YOUR GYM DETAILS</h1>

                            <br/>

                            <form>
                                <div className="shadow-lg p-5 rounded">
                                    <div className="form-gruop">
                                        <label className="mb-1 fs-2" htmlFor="gymName">Gym Name</label>
                                        <input 
                                        className="form-control form-control-lg fs-4 "
                                        type="text" 
                                        name="gymName" 
                                        id="gymName"
                                        required
                                        placeholder="Gym Name" 
                                        autoComplete="off"
                                        
                                        /><br/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="gymOwner">Gym Owner</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="text" 
                                        name="gymOwner" 
                                        id="gymOwner"
                                        placeholder="Gym Owner"
                                        autoComplete="off"
                                        required 
                                        
                                        />
                                    </div><br/>

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
                                        
                                        /><br/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="state">State</label>
                                        <select id="state" name="state" class="form-control fs-4" required>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu Kashmir">Jammu Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="kerala">kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>

                                        </select>
                                    </div><br/>
                                    
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="address">Address</label>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        type="text" 
                                        name="address" 
                                        id="address"
                                        placeholder="Address"
                                        autoComplete="off"
                                        required 
                                        
                                        /><br/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="mb-1 fs-2" htmlFor="image">Add Image</label><br/>
                                        <input 
                                        className="form-control form-control-lg fs-4"
                                        id="fileupload" 
                                        type="file" 
                                        name="image" 
                                        required multiple="multiple"/> <br/>
                                        
                                    </div>
                                    <div className="form-gruop mb-4">
                                            <label className="mb-1 fs-2" htmlFor="description"> Description</label>
                                            <textarea 
                                            className="form-control form-control-lg fs-4"
                                            name="description" 
                                            id="description" 
                                            cols="30" 
                                            rows="10"
                                            placeholder="Add some description about your gym"
                                            
                                            autoComplete="off"
                                            required></textarea>
                                        </div>
                                    <br/>

                                    <button 
                                    className="btn btn-danger fs-4 px-3 py-2"
                                    type="submit"
                                    value="Submit now"
                                    >
                                        Add
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
export default Addgym;