import React, {useEffect, useState} from 'react'
import '../Styles/home.css'
import Post from '../Components/Post';
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import PostList from '../Components/PostList';

function Home() {

    let navigate = useNavigate();

    const [userInput, setUserInput] = useState('');
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
                        <input 
                            type='text' 
                            placeholder='Enter the name or description of the crop...' 
                            className='searchField'
                            onChange={e => setUserInput(e.target.value)}
                            value={userInput}
                        />
                        <button className='searchButton' onClick={() => setSearch(userInput)}>Search</button>
                    </div>
                    <PostList search = {search}/>
                </div>
                {/*<div className='bottomButtons'>
                    <button className='bottomButton prev'>{"<"}</button>
                    <button className='bottomButton next'>{">"}</button>
                </div>*/}
                <div className='homebg'>&nbsp;</div>
            </div>
        </div>
    )
}

export default Home;