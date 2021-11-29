import React from 'react';
import Register from './Register';
import Students from './Students';
import Takeaways from './Takeaways';
import Testimonials from './Testimonials';
import Video from './Video';
import Newsletter from './Newsletter';
import ImageCarousel from './ImageCarousel';
import Instructor from './Instructor';
import Description from './Description';
import Event from './Event';
import Contact from './Contact';
import Navigation from './Navigation';



function Home() {
    return (
        <div>
        <Navigation />
        <ImageCarousel />
        <Register />
        <Instructor />
        <Description />
        <Students />
        <Video />
        <Takeaways />
        <Testimonials />
        <Newsletter />
        <Event /> 
        <Contact />   
        </div>
    )
}

export default Home
