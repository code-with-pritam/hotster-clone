import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';
import playicon1 from '../../images/play-icon-black.png'
import playicon2 from '../../images/play-icon-white.png'
import groupwatch from '../../images/group-icon.png'
import db from "../../firebase";

const Detail = (props) => {

    const { id } = useParams()
    const [detailData, setDetailData] = useState({})

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such document in firebase 🔥");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);

    return (
        <div className='detail-container'>
            <div className="detail-gackground">
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </div>
            <div className="detail-imagetitle">
            <img src={detailData.titleImg} alt={detailData.title} />
            </div>
            <div className="detail-contentmeta">
                <div className="detail-controls">
                    <button className="detail-player">
                        <img src={playicon1} alt="" />
                        <span>Play</span>
                    </button>
                    <button className="detail-trailer">
                        <img src={playicon2} alt="" />
                        <span>Trailer</span>
                    </button>
                    <div className="detail-addlist">
                        <i class="fa-solid fa-plus 2x"></i>
                    </div>
                    <div className="detail-groupwatch">
                        <div>
                            <img src={groupwatch} alt="" />
                        </div>
                    </div>
                </div>
                <div className="detail-subtitle">
                    {detailData.subTitle}
                </div>
                <div className="detail-description">
                {detailData.description}
                </div>
            </div>
        </div>
    )
}

export default Detail;
