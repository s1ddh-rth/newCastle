import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Description from './components/Description';
import Event from './components/Event';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Instructor from './components/Instructor';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import Partners from './components/Partners';
import Preloader from './components/Preloader';
import Register from './components/Register';
import Students from './components/Students';
import Takeaways from './components/Takeaways';
import Testimonials from './components/Testimonials';
import Video from './components/Video';


function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <ImageCarousel />
      <Register />
      <Partners />
      <Instructor />
      <Description />
      <Students />
      <Video />
      <Takeaways />
      <Testimonials />
      <Newsletter />
      <Event /> 
      <Contact />   
      <Footer />
      <Copyright />
    
    </>
  );
}

export default App;
