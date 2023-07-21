import React, { useEffect } from 'react';
import './App22.css';
import { Routes, Route } from 'react-router-dom';
import Header  from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; 
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

const App22 = () => {
    const setPosts = useStoreActions((actions) => actions.setPosts);

    const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/posts`);    

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts]);   

    return (
        <div className='App22'>
            <Header title='React JS Blog' />
            <Navbar />
                <Routes>
                    <Route path='/' 
                            element={<Home 
                                        isLoading={isLoading}
                                        fetchError={fetchError}
                                    />} 
                    />
                    <Route path='/post' element={<NewPost />} />
                    <Route path='/edit/:id' element={<EditPost />} />
                    <Route path='/post/:id' element={<PostPage />} /> 
                    <Route path='/about' element={ <About/> } />
                    <Route path='*' element={ <Missing/> } />
                </Routes>
            <Footer/>
        </div>
    );
};

export default App22;