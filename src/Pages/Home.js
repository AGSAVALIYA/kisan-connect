import React, {useEffect, useState} from 'react'
import '../Styles/home.css'
import Post from '../Components/Post';
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import PostList from '../Components/PostList';
import FeatherIcon from 'feather-icons-react';

function Home() {

    let navigate = useNavigate();

    const [search, setSearch] = useState('');

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
                    <div className='searchBox'>
                        <FeatherIcon className='menu searchIcon' icon="search" color="#f5f5f5"  size={34}/> 
                        <input 
                            type='text' 
                            placeholder='Enter the name or description of the crop...' 
                            className='searchField'
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>
                    <PostList search = {search}/>
                </div>
                <div className='homebg'>&nbsp;</div>
            </div>
        </div>
    )
}

export default Home;