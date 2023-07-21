import { createStore, action, thunk, computed } from "easy-peasy";
import api from './api/posts';

export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    postTitle: '',
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    postCount: computed((state) => state.posts.length),
    getPostById: computed((state) => {
        return (id) => state.posts.find((post) => (post.id).toString() === id);
    }),

    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            const reponse = await api.post('/posts', newPost);  // endpoint + data that are we sending
            actions.setPosts([...posts, reponse.data]);
            actions.setPostTitle('');
            actions.setPostBody('');
        }
        catch (error) {
            console.error(`Error: ${error.message}`);
        };
    }),

    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();
        try {
            if(window.confirm(`Are you sure you want to delete a post ?`)) {
                await api.delete(`/posts/${id}`);   // endpoint + post id
                actions.setPosts(posts.filter((post) => {
                    console.log(post);
                    return (
                        post.id !== id
                    );
                }));
            }; 
        }
        catch (error) {
            console.error(`Error: ${error.message}`);
        };
    }),

    editPost: thunk(async (actions, updatedPost, helpers) => {
        const { posts } = helpers.getState();
        const { id } = updatedPost;
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);   // endpoint + post id
            actions.setPosts(posts.map((post) => {
                // console.log(post);
                return (
                    post.id === id ? { ...response.data} : post
                );
            }));
            actions.setEditTitle('');
            actions.setEditBody('');
        }
        catch (error){
            console.log(`Error: ${error.message}`);
        };
    }),
});