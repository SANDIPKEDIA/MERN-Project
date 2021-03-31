import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>we are sorry,page not found</h2>
                    <p className="mb-5">WE ARE SORRY</p>
                    <NavLink to="/">Back to HomePage</NavLink>
                </div>
            </div>
        </>
    )
}
export default ErrorPage