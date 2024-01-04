import React from 'react';
import "../pages/Profile.css";
import Sidebar from "../Components/sidebar"
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Edit_profile() {
  const [showpassword, setShowPassword] = useState(false);

  const handleCheckbox = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
    <>  
        <div className="container">
        <Sidebar activeprofile={'active'}/>
                <main style={{margintop: '58px'}}>
                    <div className="container pt-4">
                        <div className="heading">Edit Profile</div>
                    </div>
                    <div className="profile-input-tags form-">
                          <form class="row g-3">
                        <div class="col-md-6">
                          <label for="inputfname" class="form-label ">First Name</label>
                          <input type="text" class="form-control profile-input" id="firstname" placeholder='John' p/>
                        </div>
                        <div class="col-md-6">
                          <label for="inputlname" class="form-label">Last Name</label>
                          <input type="text" class="form-control profile-input" id="lastname" placeholder='Smith'/>
                        </div>
                        <div class="col-12">
                          <label for="inputemail" class="form-label">Email</label>
                          <input type="email" class="form-control profile-input" id="email" placeholder="abc123@gmail.com"/>
                        </div>
                        <div class="col-12">
                          <label for="inputcontact" class="form-label">Contact Number</label>
                          <input type="tel" class="form-control profile-input" id="phone" pattern="[0-9]{4}[0-9]{7}" placeholder="03124567890" required/>
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Address</label>
                          <input type="text" class="form-control profile-input" id="inputAddress" placeholder="Apartment, studio, or floor"/>
                        </div>
                       
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">New Password</label>
                          <div className="mb-3 input-passeye form-control profile-input">
                                  <input
                                    type={showpassword ? "text" : "password"}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                  />
                                  <div className="" onClick={handleCheckbox}>
                                    {showpassword ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-eye-slash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                                      </svg>
                                     ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-eye"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                      </svg>
                                    )}
                                  </div>
                                    </div>
                                </div>
                                <div class="col-12">
                          <label for="inputAddress" class="form-label">Retry New Password</label>
                          <div className="mb-3 input-passeye form-control profile-input">
                                  <input
                                    type={showpassword ? "text" : "password"}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                  />
                                  <div className="" onClick={handleCheckbox}>
                                    {showpassword ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-eye-slash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-eye"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                      </svg>
                                    )}
                                  </div>
                                    </div>
                                </div>
                                <label class="form-label" for="textAreaExample">Discription</label>
                                <div class="form-outline" data-mdb-input-init>
                                          <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                                    </div>  
                      
                        <div class="col-12 save-bttn">
                          <div>   
                             <NavLink to="/profile"><button type="button" class="btn btn-outline-danger" data-mdb-ripple-init data-mdb-ripple-color="dark">Cancel</button></NavLink>  
                         </div>
                          <div>  
                                <button type="button" class="btn btn-outline-success" data-mdb-ripple-init data-mdb-ripple-color="dark">Save</button>
                            </div>
                         </div>
                      </form>
                    </div>
                </main>
        </div>            
    </>
  </div>
  )
}