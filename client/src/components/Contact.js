import React from 'react'
const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            {/* phone */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        phone
                           </div>
                                    <div className="contact_info_text">
                                        +91-8918569670
                           </div>
                                </div>
                            </div>
                            {/* phone */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="email" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        email
                           </div>
                                    <div className="contact_info_text">
                                        sandip@gmail.com
                           </div>
                                </div>
                            </div>
                            {/* phone */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="address" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        address
                           </div>
                                    <div className="contact_info_text">
                                        West Bengal
                           </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* contact us form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5" >
                                <div className="contact_form_title">
                                    Get in Touch
                    </div>
                                <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name"
                                            className="contact_form_name input_field"
                                            placeholder="Your Name" required="true" />


                                        <input type="email" id="contact_form_email"
                                            className="contact_form_email input_field"
                                            placeholder="Your email" required="true" />


                                        <input type="number" id="contact_form_number"
                                            className="contact_form_number input_field"
                                            placeholder="Your number" required="true" />
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_messsage" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Contact