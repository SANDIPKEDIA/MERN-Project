import React from 'react'
import { NavLink } from 'react-router-dom'
import signup from "../images/logo.png"

const Signup = () => {
    return (
        <>

            <section className="signup">
                <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                    <i className></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i className></i>
                                </label>
                                <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                            <img src={signup} alt="registration pic" />
                        </figure>
                        <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                    </div>
                </div>
</div>
            </section>


        </>
    )
}
export default Signup