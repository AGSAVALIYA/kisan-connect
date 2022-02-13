import React, {useEffect, useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import '../Styles/dashboard.css';
import Post from '../Components/Post';
import '../Styles/dashboard.css';
import 'tachyons';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NewPostMenu from '../Components/NewPostMenu';
import {query, getDocs, where, collection, getFirestore} from 'firebase/firestore';
 
function Dashboard() {

    const db = getFirestore();

    let navigate = useNavigate();

    const [newPostMenuOpen, setNewPostMenuOpen] = useState(false);
    const [dashboardposts, setDashboardPosts] = useState([]);

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if(authToken){
            navigate('./');
        }

        if(!authToken){
            navigate('./signin');
        }
        
        getDashboardPosts();
    }, [])

    const openNewPostMenu = () => {
      setNewPostMenuOpen(!newPostMenuOpen);
    }
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('userEmail', '==', sessionStorage.getItem('User Email')));
      const getDashboardPosts = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        setDashboardPosts(arr => [...arr ,doc.data()])
      })
    }
    const dashboardpostarray = dashboardposts.map((dashboardposts)=>{
      return(
             <Post key={dashboardposts.id} title={dashboardposts.title} details={dashboardposts.details} price={dashboardposts.price} date={dashboardposts.date}/>
             )
           })

    return (
      <div className='dashboard'>
        <Navbar/>
        <div>
          <div className='dashhead'>
            <h1 className='postlistHeader pa2 w-50'>My Posts</h1>
            
            <button className='createPostButton' onClick = {openNewPostMenu}> <FeatherIcon className='plusIcon' icon="plus" color="#FFF" size="24" />New Post</button>
          </div>
            {newPostMenuOpen && <NewPostMenu setNewPostMenuOpen = {setNewPostMenuOpen}/>}
          
          <div className='post-list'> 
           {dashboardpostarray}
          </div> 
        </div>
        <div className='dashbg'>&nbsp;</div>
      </div>
    )
}

export default Dashboard;