import React from 'react'
import '../Styles/post.css'
import login from '../login.png'

function Post({ title, details, date, price }) {
  return (
    <div className="product-cards">
        <div className="div1">
            <div className="product-image">
                <img src = {login} alt = 'img'/>
            </div>
        </div>
        <div className="div2">
            <div className="product-name">
                <h3>{title}</h3>
            </div>
            <div className="product-details">
                <p>{details}</p>
            </div>
            <div className="div3">
                <div className="product-price">
                    <h4>{price}</h4>
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