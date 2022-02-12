import './App.css';
import Signin from './Pages/Signin.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home.js';
import Navbar from './Components/Navbar.js';
import Dashboard from './Pages/Dashboard.js';
import Register from './Pages/Register.js';
import {useState} from 'react';
import {app} from './firebaseConfig.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (id) => {
    const authentication = getAuth();
    if(id === 2){
      createUserWithEmailAndPassword(authentication, email, password)
      .then(res => {
        navigate('./');
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
      })
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/register' element = {<Register setEmail = {setEmail} setPassword = {setPassword} handleSubmit = {() => handleSubmit(2)}/>}/>
          <Route path = '/signin' element = {<Signin setEmail = {setEmail} setPassword = {setPassword} handleSubmit = {() => handleSubmit(1)}/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
