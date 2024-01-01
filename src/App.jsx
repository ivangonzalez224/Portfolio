import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/pages/main/Home';
import Footer from './components/Footer';

const App = () => (
  <div className="main-container">
    <NavBar />
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
    <Footer />
  </div>

);

export default App;