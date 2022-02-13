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
import {getFirestore, collection, addDoc, getDocs, query, where, limit} from 'firebase/firestore';

function App() {
  const db = getFirestore();
  
  let navigate = useNavigate();

  const createNewUser = async (name, email, password, address, phone, age, gender) => {
    try{
      if(name && email && password && address && phone && age && gender){
          const docRef = await addDoc(collection(db, "users"), {
              name: name,
              email: email,
              password: password,
              address: address,
              phone: phone,
              age: age,
              gender: gender
          });

          sessionStorage.setItem('User Id', docRef.id)
      }else{
          toast.error('All the required fields are not filled')
          }
    }catch(e){
        toast.error(e.code)
    }
  }

  const handleSubmit = (id, email, password, name = '', address = '', phone = '', age = '', gender = 'Male') => {
    const authentication = getAuth();
    if(id === 2){
      createUserWithEmailAndPassword(authentication, email, password)
      .then(res => {
        createNewUser(name, email, password, address, phone, age, gender)
        navigate('/');
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
      })
      .catch(err => {
        if(err.code === 'auth/email-already-in-use'){
          toast.error('Email already in use');
        }else if(err.code == 'auth/weak-password'){
          toast.error('Weak Password');
        }
      })
    }

    if(id == 1){
      signInWithEmailAndPassword(authentication, email, password)
      .then(res => {
        navigate('/');
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);

        const usersRef = collection(db, 'users');
        const q = query(usersRef, where("email", "==", email), limit(1));
        getDocs(q).then(querySnapshot => {
          querySnapshot.forEach((doc) => {
              console.log(doc.id)
              sessionStorage.setItem('User Id', doc.id)
              console.log(sessionStorage.getItem('User Id'))
          })
        })
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
            <Route path = '/register' element = {<Register handleSubmit = {handleSubmit}/>}/>
            <Route path = '/signin' element = {<Signin handleSubmit = {handleSubmit}/>}/>
              <Route path = '/dashboard' element = {<Dashboard/>}/>
              <Route exact path = '/' element = {<Home/>}/>
              <Route path = '*' element = {<Home/>}/>
          </Routes>
        </div>     
    </div>
  );
}

export default App;
