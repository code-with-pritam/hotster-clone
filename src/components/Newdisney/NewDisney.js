import React from 'react'
import './NewDisney.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../../features/movie/movieSlice'

const NewDisney = (props) => {
    const newdisney = useSelector(selectNewDisney);

    return (
        <div className='newdisney-container'>
            <h1>New Disney +</h1>
            <div className="newdisney-content">
                {
                    newdisney && newdisney.map((newd, key) => (
                        <div div className="newdisney-wrap" key={key} >
                            {newd.id}
                            <Link to={`/details/` + newd.id}>
                                <img src={newd.cardImg} alt={newd.title} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default NewDisney;
