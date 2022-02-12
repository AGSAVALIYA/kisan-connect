import React, {useEffect} from 'react'
import '../Styles/home.css'
import Post from '../Components/Post';
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar';

function Home() {

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
        <div>
            <Navbar/>
            <div className='home'>
                <div className='post-list'>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div className='homebg'>&nbsp;</div>
            </div>
        </div>
    )
}

export default Home;