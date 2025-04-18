import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    return (
        <div>
            <h1>This is post Details</h1>
            <p>Title: {post.title}</p>
            <h2>Body: {post.body}</h2>
        </div>
    );
};

export default PostDetails;