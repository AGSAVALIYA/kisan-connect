import React from 'react'
import '../Styles/post.css'
import login from '../login.png'

function Post() {
  return (
    <div class="product-cards">
        <div class="div1">
            <div class="product-image">
                <img src = {login} alt = 'img'/>
            </div>
            <div class="product-name">
                <h3>Wheat</h3>
            </div>
        </div>
        <div class="div2">
            <div class="product-details">
                <p>Details about the post will go here, they will only cover this space and post should be opened in order to see the entire post.</p>
            </div>
            <div class="div3">
                <div class="product-price">
                    <h4>Price: Rs 2000</h4>
                </div>
                <div class="last-date">
                    <h4>Last Date: 12-02-22</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post