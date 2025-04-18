import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()

    // navigate can use differnet ways. below one's is one of them
    const navigate = useNavigate()
    return (
        <div>
            <h1>This is post Details</h1>
            <p>Title: {post.title}</p>
            <h2>Body: {post.body}</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;