import React from 'react'
import '../Styles/post.css'
import login from '../login.png'
import {getFirestore, doc, deleteDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

function Post({id, title, details, date, price, deletable }) {

    let navigate = useNavigate();

    const db = getFirestore();

    const deletePost = async () => {
        await deleteDoc(doc(db, 'posts', id));
        navigate('/');
    }

  return (
    <div className="product-cards">
        {/*<div className="div1">
            <div className="product-image">
                <img src = {login} alt = 'img'/>
            </div>
        </div>*/}
        <div className="div2">
            <div className="product-name">
                <h3>{title}</h3>
                {deletable && <button className = 'deleteButton' onClick = {deletePost}>Delete</button>}
            </div>
            <div className="product-details">
                <p>{details}</p>
            </div>
            <div className="div3">
                <div className="product-price">
                    <h4>₹{price}</h4>
                </div>
                <div className="last-date">
                    <h4>Last Date: {date}</h4>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Post;