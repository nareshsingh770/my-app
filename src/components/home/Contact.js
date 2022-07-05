import React from 'react'

import contactDetails from '../../actions/Actions';
import { useSelector, useDispatch } from 'react-redux'



const Contact = () => {

    const typedDetails = useSelector((store) => store.messageInput);
    const dispatch = useDispatch()


    return (
        <>
            <section className="contact text-white">
                <div className='container'>
                    <h2 className="text-center mb-5">Contact me</h2>
                    <div className="contact-wrapper mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Get in Touch</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                                    corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                                <div className="detail-wrapper d-flex align-items-center justify-content-between">
                                    <span><i className="text-danger fas fa-user"></i></span>
                                    <div className="details d-flex flex-column">
                                        <label>Name</label>
                                        <span>Naresh Singh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4>Message</h4>
                                <form>

                                    <div className="first-field d-flex justify-content-between mb-2 mt-2">
                                        <div className="">
                                            <input type="text" className="form-control" name='name' value={typedDetails.name} placeholder="Name" onChange={(e) => dispatch(contactDetails(e.target))} />
                                        </div>
                                        <div className="">
                                            <input type="email" className="form-control" name='email' value={typedDetails.email} placeholder="Email" onChange={(e) => dispatch(contactDetails(e.target))} />
                                        </div>
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <input type="text" className="form-control" name='subject' value={typedDetails.subject} placeholder="Subject" onChange={(e) => dispatch(contactDetails(e.target))} />
                                    </div>
                                    <div className="mb-2 mt-2">
                                        <textarea className="form-control" rows="3" name='message' value={typedDetails.message} placeholder="Message..." onChange={(e) => dispatch(contactDetails(e.target))}></textarea>
                                    </div>
                                    <button className="btn btn-danger" >Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;


