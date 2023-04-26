import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'
import { AuthContext } from './context'
import Loader from './UI/Loader/Loader'


export const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth ?
            <Routes>
                <Route path='/posts' element={<Posts />} />
                <Route path='/about' element={<About />} />
                <Route path='/posts/:id' element={<PostIdPage />} />
                <Route
                    path="*"
                    element={<Posts />}
                />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Login />} />
            </Routes>



    )
}
