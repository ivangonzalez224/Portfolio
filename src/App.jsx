import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/main';

const App = () => (
  <div className="main-container">
    <NavBar />
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  </div>

);

export default App;