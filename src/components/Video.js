import React from 'react'

function Video() {
    return (
        <div>
            <div className="basic-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Course Video Presentation</h2>

                        
                            <div className="image-container">
                                <div className="video-wrapper">
                                <iframe title="youtubeVideo" width="100%" height="500" src="https://www.youtube.com/embed/iBj9PWk1noA">
                                </iframe>
                                    {/* <a className="popup-youtube" href="https://www.youtube.com/watch?v=iBj9PWk1noA&t=22s" data-effect="fadeIn">
                                        <img className="img-fluid" src="images/video.jpg" alt="alternative" />
                                        <span className="video-play-button">
                                            <span></span>
                                        </span>
                                    </a> */}
                                </div> 
                            </div> 
                        

                        </div> 
                    </div>
                </div> 
            </div> 
            

        </div>
    )
}

export default Video
