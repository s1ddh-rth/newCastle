import React from "react";

function Video(props) {
  return (
    <div>
      <div className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{props.title}</h2>

              <div className="image-container">
                <div className="video-wrapper">
                  <iframe
                    title="youtubeVideo"
                    width="100%"
                    height="500"
                    src={props.src}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
