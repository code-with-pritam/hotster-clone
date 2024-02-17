import React from 'react'
import './Trending.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectTrending } from '../../features/movie/movieSlice'


const Trending = (props) => {
    const trending = useSelector(selectTrending);
    return (
        <div className='trending-container'>
            <h1> Trending </h1>
            <div className="trending-content">
                {/* <div className="trending-wrap">
                    <Link to='/'>
                        <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Link>
                </div> */}

                {
                    trending && trending.map((trending, key) => (
                        <div className="recomm-wrap" key={key}>
                            {trending.id}
                            <Link to={`/details/` + trending.id}>
                                <img src={trending.cardImg} alt={trending.title} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Trending;
