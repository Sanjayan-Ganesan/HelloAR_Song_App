import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import OtpPage from './Components/Otp';
import Songs from './Components/Songs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/otp' element={<OtpPage/>}/>
          <Route exact path='/songs' element={<Songs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
