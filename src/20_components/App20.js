import React, { useState, useEffect } from 'react';
import './App20.css';
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
import api from './api/posts';
import EditPost from './EditPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';


const App20 = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/posts`);    

    useEffect(() => {
        setPosts(data);
    }, [data]);    


    useEffect(() => {
        const filteredResults = posts.filter((post) => {
            return (
                ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
                ((post.title).toLowerCase()).includes(search.toLowerCase())
                );
            });
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1; 
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { 
            id: id, 
            title: postTitle, 
            datetime: datetime, 
            body: postBody,
        };
        try {
            const reponse = await api.post('/posts', newPost);  // endpoint + data that are we sending
            const allPosts = [...posts, reponse.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        }
        catch (error) {
            console.error(`Error: ${error.message}`);
        };
    };


    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { 
            id: id, 
            title: editTitle, 
            datetime: datetime, 
            body: editBody,
        };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);   // endpoint + post id
            setPosts(posts.map((post) => {
                // console.log(post);
                return (
                    post.id === id ? { ...response.data} : post
                );
            }));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        }
        catch (error){
            console.log(`Error: ${error.message}`);
        };
    };


    const handleDelete = async (id) => {
        console.log(id);
        try {
            if(window.confirm(`Are you sure you want to delete a post ?`)) {
                await api.delete(`/posts/${id}`);   // endpoint + post id
                const postsList = posts.filter((post) => post.id !== id);
                setPosts(postsList);
                navigate('/');
            }; 
        }
        catch (error) {
            console.error(`Error: ${error.message}`);
        };
    };

    return (
        <div className='App20'>
            <Header title='React JS Blog' width={width}/>
            <Navbar search={search} setSearch={setSearch} />
                <Routes>
                    <Route path='/' element={
                            <Home 
                                posts={searchResults}
                                fetchError={fetchError}
                                isLoading={isLoading}
                            />} 
                    />
                    <Route path='/post' element={ 
                                <NewPost
                                    handleSubmit={handleSubmit}
                                    postTitle={postTitle}
                                    setPostTitle={setPostTitle}
                                    postBody={postBody}
                                    setPostBody={setPostBody}
                                />}
                    />
                    <Route path='/edit/:id' element={ 
                                <EditPost 
                                    posts={posts}
                                    handleEdit={handleEdit}
                                    editTitle={editTitle}
                                    setEditTitle={setEditTitle}
                                    editBody={editBody}
                                    setEditBody={setEditBody}
                                />}
                    />
                    <Route path='/post/:id' element={ 
                                    <PostPage 
                                        posts={posts} 
                                        handleDelete={handleDelete} 
                                    />}
                    /> 
                    <Route path='/about' element={ <About/> } />
                    <Route path='*'      element={ <Missing/> } />
                </Routes>
            <Footer/>
        </div>
    );
};

export default App20;







// Brisemo 

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get('/posts');
    //             setPosts(response.data);
    //         }
    //         catch(error) {   // Not in the 200 response range
    //             if(error.response) {
    //             console.error(error.response.data);
    //             console.error(error.response.status);
    //             console.error(error.response.headers);
    //             }
    //             else {   // All other errors
    //                 console.error(`Error: ${error.message}`);
    //             };
    //         };
    //     };
    //     fetchPosts();
    // }, []);