import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import Navbar from './components/Navbar2';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <div className = "pages">
          <Routes>
            <Route 
              path="/"
              element={ <LandingPage /> }
            />
            <Route
              path="/home"
              element={ <Home /> }
            />
            <Route
              path="/profile"
              element={ <Profile /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
