import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import App from './App';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <div className={styles.navBar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/about/" className={styles.navLink}>About</Link>
    </div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
