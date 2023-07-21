import React, { useEffect, useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api/posts';
import { format } from 'date-fns';
import DataContext from './context/DataContext';

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const post = posts.find((post) => { 
        return (
            (post.id).toString() === id
        );
    });

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        };
    }, [post, setEditTitle, setEditBody]);

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

    return (
        <main className='NewPost'>
            {editTitle && (
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            id='postTitle'
                            type='text'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post: </label>
                        <textarea 
                            id='postBody' 
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                    />
                        <button type='submit' onClick={() => handleEdit(post.id)}>
                                Save changes
                        </button>
                    </form>
                </>
            )}
            {!editTitle && (
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            )}
        </main>
    );
};

export default EditPost;