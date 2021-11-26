import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <>
    <Router>
      <Preloader />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
      </Routes>
      <Footer />
      <Copyright />
    </Router>
    </>
  );
}

export default App;
