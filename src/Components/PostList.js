import {useEffect, useState} from "react";
import Post from './Post';
import {useCollection, useCollectionData} from 'react-firebase-hooks/firestore';
import {query, getDocs, where, collectionGroup, getFirestore, limit} from 'firebase/firestore';
const PostList = ({search}) =>{
    const db = getFirestore();
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        const q = query(collectionGroup(db, "posts"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setPosts(arr => [...arr ,{id: doc.id, data: doc.data()}])
            
        }); 
    }

    useEffect(() => {
        getPosts();
    }, [])
    
    const postarray = posts.map((post)=>{
        if(search){
            if(post.data.title.toLowerCase().includes(search.toLowerCase()) || post.data.details.toLowerCase().includes(search.toLowerCase())){
                return(
                    <Post key={post.id} id = {post.id} title={post.data.title} details={post.data.details} price={post.data.price} date={post.data.date} deletable={false}/>
                )
            }
        }
        else{
            return(
                <Post key={post.id} id = {post.id} title={post.data.title} details={post.data.details} price={post.data.price} date={post.data.date} deletable = {false}/>
            )
        }
    })
    
    return(
        <div>
           {postarray}
        </div>
    );

}

export default PostList;