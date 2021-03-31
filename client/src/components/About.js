import React from 'react'
const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="" >
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                            <img src="" alt="sa"></img>
                            </div>
                           
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>sandip kedia</h5>
                                <h6>fullstack</h6>
                                <p className="profile rating mt-3 mb-5">RANKINGS: <span>1/10</span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toogle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toogle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    <div className="col-md-2">
                        <input type="text" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                    </div>

                    <div className="row">
                        {/* {left side url} */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="https://github.com/sandipkedia" target="_sandip">GitHub</a>
                                <a href="https://github.com/sandipkedia" target="_sandip">GitHub</a>

                                <a href="https://github.com/sandipkedia" target="_sandip">GitHub</a>

                                <a href="https://github.com/sandipkedia" target="_sandip">GitHub</a>

                            </div>
                        </div>

                            {/* right side url */}

                            <div className="col-md-8 pl-5 about-info">
                                <div className="tav-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>54867569247925697</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>SandipKedia</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>sandip@gmail.com</p>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>
</div>


                </form>
            </div>
        </>
    )
}
export default About