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
import {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (id) => {
    const authentication = getAuth();
    if(id === 2){
      createUserWithEmailAndPassword(authentication, email, password)
      .then(res => {
        navigate('/');
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
      })
      .catch(err => {
        if(err.code === 'auth/email-already-in-use'){
          toast.error('Email already in use');
        }     
      })
    }

    if(id == 1){
      signInWithEmailAndPassword(authentication, email, password)
      .then(res => {
        navigate('/');
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          toast.error('Please check the Password');
        }
        if (err.code === 'auth/user-not-found') {
          toast.error('Please check the Email');
        }
      })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])

  return (
    <div className="App">
      <ToastContainer/>
      <div className='container'>
        <Routes>
          <Route path = '/register' element = {<Register setEmail = {setEmail} setPassword = {setPassword} handleSubmit = {() => handleSubmit(2)}/>}/>
          <Route path = '/signin' element = {<Signin setEmail = {setEmail} setPassword = {setPassword} handleSubmit = {() => handleSubmit(1)}/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '*' element = {<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
