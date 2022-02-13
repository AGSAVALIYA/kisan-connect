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
            setPosts(arr => [...arr ,doc.data()])
            
        }); 
    }

    useEffect(() => {
        getPosts();
    }, [])

    
    const postarray = posts.map((posts)=>{
        if(search){
            if(posts.title){
                
            }
        }
        else{
            return(
                <Post key={posts.id} title={posts.title} details={posts.details} price={posts.price} date={posts.date}/>
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