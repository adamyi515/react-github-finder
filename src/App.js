import './App.css';

// Components
import Navbar from './components/layout/navbar.component';
import HomePage from './pages/homepage.component';
import AboutPage from './pages/aboutpage.component';
import UserDetail from './components/user-detail/user-detail.component';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{
        width: '70%',
        margin: '30px auto'
      }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/user/:username' element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
