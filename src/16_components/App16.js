import React, {useState, useEffect} from 'react';
import './App16.css';
import Header  from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; 
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const App16 = () => {
    return (
        <div className='App16'>
            <Router>
                <Header/>
                <Navbar/>
                    <Routes>
                        <Route path='/'         element={<Home/>}     />
                        <Route path='/post'     element={<NewPost/>}  />
                        <Route path='/post/:id' element={<PostPage/>} /> 
                        <Route path='/about'    element={<About/>}    />
                        <Route path='*'         element={<Missing/>}  />
                    </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App16;