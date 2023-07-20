import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
    // console.log(posts);
    return (
        <main className='Home'>
            <h1>Home</h1>    
            {posts.length ? (
                <Feed posts={posts}/>
            ) : (   
                <p style={{ marginTop: '2rem' }}>
                    No posts to display
                </p>
            )}
        </main>
    );
};

export default Home;