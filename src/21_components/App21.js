import React from 'react';
import './App21.css';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Header  from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; 
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';

const App21 = () => {
    return (
        <div className='App21'>
            <Header title='React JS Blog' />
            <DataProvider>
                <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/post' element={<NewPost />} />
                        <Route path='/edit/:id' element={<EditPost />} />
                        <Route path='/post/:id' element={<PostPage />} /> 
                        <Route path='/about' element={ <About/> } />
                        <Route path='*' element={ <Missing/> } />
                    </Routes>
                <Footer/>
            </DataProvider>
        </div>
    );
};

export default App21;