import React, {useState} from 'react'
import '../Styles/newPostMenu.css'
import {getFirestore, collection, addDoc} from 'firebase/firestore';

function NewPostMenu() {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState(null);
    
    const db = getFirestore();
    
    const createNewPost = async () => {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            details: details,
            price: price,
            date: date,
            userID: sessionStorage.getItem('User ID')
        });
    }


    return (
        <div className='newPostMenu'>
            <div className='newPostMenuTitle'>Create New Post</div>
            <div className='inputFields'>
                <div className='inputFieldLabel'>Crop Name</div>
                <input className='inputField' type='text' onChange={(e) => setTitle(e.target.value)}/>
                <div className='inputFieldLabel'>Crop Details</div>
                <input className='inputField' type='text' onChange={e => setDetails(e.target.value)}/>
                <div className='inputFieldLabel'>Price (₹)</div>
                <input className='inputField' type='number' onChange={e => setPrice(e.target.value)}/>
                <div className='inputFieldLabel'>Due Date</div>
                <input className='inputField'type = 'date' onChange={e => setDate(e.target.value)}/>
                <button className='postButton' onClick={createNewPost}>Post</button>
            </div>
        </div>
    )
}

export default NewPostMenu;