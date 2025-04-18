import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div style={{border:'2px solid green', borderRadius:'5px', marginBottom:'10px'}}>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            
        </div>
    );
};

export default Post;