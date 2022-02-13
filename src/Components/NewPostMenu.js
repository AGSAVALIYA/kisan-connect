import React, {useState} from 'react'
import '../Styles/newPostMenu.css'
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPostMenu({setNewPostMenuOpen}) {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState(null);
    const [userID, setUserID] = useState('');
    
    const db = getFirestore();

    const createNewPost = async () => {
        if(title, details, price, date){
            setNewPostMenuOpen(false);
    
            await addDoc(collection(db, "posts"), {
                title: title,
                details: details,
                price: price,
                date: date,
                userEmail: sessionStorage.getItem('User Email')
            });
        }else{
            toast.error('All required fields are not filled')
        }

    }


    return (
        <div className='newPostMenu'>
            <ToastContainer/>
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