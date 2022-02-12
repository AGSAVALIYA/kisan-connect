import React, {useEffect} from 'react';
import FeatherIcon from 'feather-icons-react';
import '../Styles/dashboard.css';
import Post from '../Components/Post';
import '../Styles/dashboard.css';
import 'tachyons';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Dashboard() {

    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if(authToken){
            navigate('./');
        }

        if(!authToken){
            navigate('./signin');
        }

    }, [])

  return (
    <div >
        <Navbar/>
      <div className='dashhead'>
      <h1 className='pa2 w-50'>My Posts</h1>
      <h1 className=' pa2 w-50 dib'> <FeatherIcon icon="plus-square" color="#000066" size="24" />New Post</h1>
      </div>
      <div className='post-list'> 
       <Post />
       <Post />
      </div>
      



      <div className='dashbg'>&nbsp;</div>
    </div>
  )
}

export default Dashboard