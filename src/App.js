import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Academics from './components/Academics';
import Corporate from './components/Corporate';
// import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
    <Router>
      <Preloader />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
    </>
  );
}

export default App;
