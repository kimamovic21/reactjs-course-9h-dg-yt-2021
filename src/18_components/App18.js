import React, { useState, useEffect } from 'react';
import './App18.css';
import Header  from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; 
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const App18 = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title:'My 1st post',
            datetime: 'July 15, 2023 12:00:00',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eum?',
        },  
        {
            id: 2,
            title:'My 2nd post',
            datetime: 'July 16, 2023 13:00:00',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime deleniti asperiores corrupti blanditiis dolore.',
        },
        {
            id: 3,
            title:'My 3rd post',
            datetime: 'July 17, 2023 14:00:00',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda quidem laboriosam ex natus ipsum adipisci temporibus sunt officia inventore?',
        },  
        {
            id: 4,
            title:'My 4th post',
            datetime: 'July 18, 2023 15:00:00',
            body: 'Lorem ipsum dolor sit amet.',
        },
    ]);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const filteredResults = posts.filter((post) => {
            return (
                ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
                ((post.title).toLowerCase()).includes(search.toLowerCase())
                );
            });
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1; 
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { 
            id: id, 
            title: postTitle, 
            datetime: datetime, 
            body: postBody,
        };
        const allPosts = [...posts, newPost ];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    };

    const handleDelete = ( id ) => {
        console.log(id);
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        navigate('/');
    };

    return (
        <div className='App18'>
            <Header title='React JS Blog' />
            <Navbar 
                search={search}
                setSearch={setSearch}
            />
                <Routes>
                    <Route 
                        path='/'        
                        element={
                            <Home 
                                posts={searchResults}/>
                        }     
                    />
                    <Route 
                        path='/post'     
                        element={
                            <NewPost
                                handleSubmit={handleSubmit}
                                postTitle={postTitle}
                                setPostTitle={setPostTitle}
                                postBody={postBody}
                                setPostBody={setPostBody}
                            />
                        }
                    />
                    <Route 
                        path='/post/:id' 
                        element={
                            <PostPage 
                                posts={posts}
                                handleDelete={handleDelete}
                            />
                        } 
                    /> 
                    <Route 
                        path='/about'    
                        element={<About/>}    
                    />
                    <Route 
                        path='*'         
                        element={<Missing/>}  
                    />
                </Routes>
            <Footer/>
        </div>
    );
};

export default App18;