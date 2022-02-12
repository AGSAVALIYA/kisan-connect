import React, {useEffect, useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import '../Styles/dashboard.css';
import Post from '../Components/Post';
import '../Styles/dashboard.css';
import 'tachyons';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NewPostMenu from '../Components/NewPostMenu';
 
function Dashboard() {

    let navigate = useNavigate();

    const [newPostMenuOpen, setNewPostMenuOpen] = useState(false);

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if(authToken){
            navigate('./');
        }

        if(!authToken){
            navigate('./signin');
        }

    }, [])

    const openNewPostMenu = () => {
      console.log(sessionStorage.getItem('User email'))
      setNewPostMenuOpen(!newPostMenuOpen);
    }

    return (
      <div className='dashboard'>
        <Navbar/>
        <div>
          <div className='dashhead'>
            <h1 className='postlistHeader pa2 w-50'>My Posts</h1>
            
            <button className='createPostButton' onClick = {openNewPostMenu}> <FeatherIcon className='plusIcon' icon="plus" color="#FFF" size="24" />New Post</button>
          </div>
            {newPostMenuOpen && <NewPostMenu/>}
          
          <div className='post-list'> 
            <Post />
            <Post />
          </div> 
        </div>
        <div className='dashbg'>&nbsp;</div>
      </div>
    )
}

export default Dashboard