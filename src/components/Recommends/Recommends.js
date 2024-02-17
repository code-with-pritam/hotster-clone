import React from 'react'
import './recommends.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../features/movie/movieSlice'

const Recommends = (props) => {
    const movies = useSelector(selectRecommend);

    console.log("const movies------" + movies)
    return (
        <div className='recomm-container'>
            <h1>Recommends</h1>
            <div className="recomm-content">
               
                {
                    movies && movies.map((movie, key) => (
                        <div className="recomm-wrap" key={key}>
                            {movie.id}
                            {console.log("movie-------" + movie)}
                            {/* <Link to={`/details/${movie.id}`}> */}
                            <Link to={`/details/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Recommends;
