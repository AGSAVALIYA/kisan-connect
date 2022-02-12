import React from 'react';
import FeatherIcon from 'feather-icons-react';
import '../Styles/dashboard.css';
import Post from '../Components/Post';
import '../Styles/dashboard.css';
import 'tachyons';

function Dashboard() {
  return (
    <div >
      <h1>My posts</h1>
      <div className='post-list'> 
       <Post />
       <Post />
      </div>
      



      <div className='dashbg'>&nbsp;</div>
    </div>
  )
}

export default Dashboard