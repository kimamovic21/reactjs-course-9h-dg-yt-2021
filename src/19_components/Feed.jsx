import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
    // console.log(posts);
    return (
        <>
            {posts.map((post) => {
                // console.log(post);
                return (
                    <Post 
                        key={post.id}
                        post={post}
                    />
                );
            })}
        </>
    );
};

export default Feed;