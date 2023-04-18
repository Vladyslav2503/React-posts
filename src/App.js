import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css';
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
        const posts = await PostService.getAll();
        setPosts(posts)
    } )
    useEffect(() => {
        fetchPosts()
    }, [])

    

    const createPost = (newPost) => {
         setPosts([...posts, newPost])
         setModal(false)
        }
    const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))




    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick = {() => setModal(true)} >
                Створити пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && 
                <h1>Зявилась помилка ${postError}</h1>
            }
            {isPostsLoading
                    ?
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}} > <Loader/> </div> 
                    :  
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постів 1"} />

            }
        </div>
    );
}

export default App;
