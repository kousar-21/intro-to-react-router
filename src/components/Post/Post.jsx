import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post

    // navigate can use differnet ways. below one's is one of them
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        // navigate('/')
        // navigate('/laptop')
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:'2px solid green', borderRadius:'5px', marginBottom:'10px'}}>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
            
        </div>
    );
};

export default Post;