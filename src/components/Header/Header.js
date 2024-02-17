import React, { useEffect } from 'react'
import './header.css'
import homeicon from '../../images/home-icon.svg'
import search from '../../images/search-icon.svg'
import watchlist from '../../images/watchlist-icon.svg'
import original from '../../images/original-icon.svg'
import movie from '../../images/movie-icon.svg'
import series from '../../images/series-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { auth, provider } from '../../firebase'
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState, } from "../../features/user/userSlice";
import Login from '../Login/Login'


const Header = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history("/home")
            }
        })
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user)
                })
                .catch((error) => {
                    alert(error.message)
                });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history('/')
            })
            .catch((err)=> alert(err.message));
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <div className='nav'>
            <div className="logo"></div>
            {
                !userName ? (
                    <a className="login" onClick={handleAuth}>Login</a>
                ) : (

                    <>

                        <div className="nav-menu">
                            <a href="/home" className='home-link' >
                                <img src={homeicon} className='home-img' alt="Home" />
                                <span>HOME</span>
                            </a>
                            <a href="/" className='home-link' >
                                <img src={search} className='home-img' alt="SEARCH" />
                                <span>SEARCH</span>
                            </a>
                            <a href="/" className='home-link' >
                                <img src={watchlist} className='home-img' alt="WATCHLIST" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href="/" className='home-link' >
                                <img src={original} className='home-img' alt="ORIGINALS" />
                                <span>ORIGINALS</span>
                            </a>
                            <a href="/" className='home-link' >
                                <img src={movie} className='home-img' alt="MOVIES" />
                                <span>MOVIES</span>
                            </a>
                            <a href="/" className='home-link' >
                                <img src={series} className='home-img' alt="SERIES" />
                                <span>SERIES</span>
                            </a>
                        </div>
                        <div className="sign-out">
                            <img src={userPhoto} className="user-img" alt="userName" srcset="" />
                            <div className="dropdown">
                                <span onClick={handleAuth}>Sign out</span>
                            </div>
                        </div>
                    </>
                )}
            {/* <div className="login" onClick={handleAuth}>Login</div> */}
        </div>
    )
}

export default Header
