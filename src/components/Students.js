import React from 'react'

function Students() {
    return (
        <div>
            <div className="basic-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Who Should Attend The SEO Training Course</h2>
                                <p>This course is for anyone passionate about the web and especially fit for those seeking to improve their online presence for company websites and blogs </p>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox">LIGHTBOX</a>
                            </div> 
                        </div> 
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/students.jpg" alt="alternative" />
                        </div> 
                    </div> 
                </div> 
            </div>



            <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
                <div className="container">
                    <div className="row">
                        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="images/details-lightbox.jpg" alt="alternative" />
                            </div> 
                        </div> 
                        <div className="col-lg-4">
                            <h3>SEO Training Course</h3>
                            <hr /> 
                            <h5>For everybody</h5>
                            <p>The training course is dedicates to anyone passionate about the web and in need of improving their current online presence.</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Link building framework</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Know your current position</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Partnering with blogs</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Naming your images</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Creating good sitemaps</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i><div className="media-body">Writing for humans</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href="#register">SIGN UP</a> <a className="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                        </div> 
                    </div>
                </div> 
            </div> 
            
        </div>
    )
}

export default Students
