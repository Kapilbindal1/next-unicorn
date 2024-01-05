import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
