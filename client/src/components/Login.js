import React from 'react'
import { NavLink } from 'react-router-dom'
import signin from "../images/logo.png"
const Login = () => {
    return(
        <>

        <section className="sign-IN">
            <div className="container mt-5">
            <div className="signin-content">
            <div className="signin-image">
                    <figure>
                        <img src={signin} alt="Login pic" />
                    </figure>
                    <NavLink to="/signup" className="signup-image-link">Create a new Account</NavLink>
                </div>
                <div className="signin-form">
                    <h2 className="form-title">Login</h2>
                    <form className="register-form" id="register-form">
                      
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
                       
                        <div className="form-group form-button">
                            <input type="submit" name="signin" id="signin" className="form-submit" value="Login" />
                        </div>
                    </form>
                </div>
               
            </div>
</div>
        </section>


    </>
    )
}
export default Login