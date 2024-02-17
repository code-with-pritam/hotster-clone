import React from 'react'
import './Originals.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectOriginal } from '../../features/movie/movieSlice'

const Originals = (props) => {
    const originals = useSelector(selectOriginal);
    return (
        <div className='original-container'>
            <h1> Originals </h1>
            <div className="original-content">
                {
                    originals && originals.map((original, key) => (
                        <div className="recomm-wrap" key={key}>
                            {original.id}
                            <Link to={`/details/` + original.id}>
                                <img src={original.cardImg} alt={original.title} />
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Originals;
