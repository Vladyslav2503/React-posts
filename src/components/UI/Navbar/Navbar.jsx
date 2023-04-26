import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar' >
            <MyButton className='exit' onClick={logout} >
                Вихід
            </MyButton>
            <div className='navbar__links' >
                <Link className='link' to='/about' >Про сайт</Link>
                <Link className='link' to='/posts' >Пости</Link>
            </div>
        </div>
    )
}

export default Navbar