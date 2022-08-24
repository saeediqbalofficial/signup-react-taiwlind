import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import OTP from './Components/OTP';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>

          <Route>

          <Route path="/" element={<Signup/>}
           />
            <Route path="/otp" element={<OTP/>}
           />

          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
