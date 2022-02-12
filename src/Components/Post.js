import React from 'react'
import '../Styles/post.css'
import login from '../login.png'

function Post() {
  return (
    <div className="product-cards">
        <div className="div1">
            <div className="product-image">
                <img src = {login} alt = 'img'/>
            </div>
        </div>
        <div className="div2">
            <div className="product-name">
                <h3>Wheat</h3>
            </div>
            <div className="product-details">
                <p>Details about the post will go here, they will only cover this space and post should be opened in order to see the entire post.</p>
            </div>
            <div className="div3">
                <div className="product-price">
                    <h4>Price: Rs 2000</h4>
                </div>
                <div className="last-date">
                    <h4>Last Date: 12-02-22</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post