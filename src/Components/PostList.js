import {useEffect, useState} from "react";
import Post from './Post';
import {useCollection, useCollectionData} from 'react-firebase-hooks/firestore';
import {query, getDocs, where, collectionGroup, getFirestore} from 'firebase/firestore';
const PostList = () =>{
    const db = getFirestore();
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const querySnapshot = await getDocs(collectionGroup(db, "posts"));
        querySnapshot.forEach((doc) => {
            setPosts(arr => [...arr ,doc.data()])
            
        }); 
    }
    


    useEffect(() => {
        getPosts();
    }, [])

    
const postarray = posts.map((posts)=>{
     return(
            <Post key={posts.id} title={posts.title} details={posts.details} price={posts.price} date={posts.date}/>
            )
          })
    
    return(
        <div>
           {postarray}
        </div>
    );

}

export default PostList;