import React from 'react';
import Register from './Register';
import Students from './Students';
// import Takeaways from './Takeaways';
// import Testimonials from './Testimonials';
import Video from './Video';
import ImageCarousel from './ImageCarousel';
import Instructor from './Instructor';
import Description from './Description';
// import Event from './Event';
import Contact from './Contact';
import Navigation from './Navigation';
import About from './About';



function Home() {
    return (
        <div>
        <Navigation />
        <ImageCarousel />
        <About />
        <Instructor />
        <Description />
        <Students />
        <Video title="Course Video Presentation" src="https://www.youtube.com/embed/u0-qxkQk8v8" />
        {/* <Takeaways /> */}
        <Register />
        {/* <Testimonials /> */}
        {/* <Event />  */}
        <Contact />   
        </div>
    )
}

export default Home
