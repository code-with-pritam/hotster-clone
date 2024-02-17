import React from 'react'
import './viewers.css'
// image import start
import viewimg1 from '../../images/viewers-disney.png'
import viewimg2 from '../../images/viewers-pixar.png'
import viewimg3 from '../../images/viewers-marvel.png'
import viewimg4 from '../../images/viewers-starwars.png'
import viewimg5 from '../../images/viewers-national.png'
// image import end 
// videos import start
import viewvideo1 from '../../videos/1564674844-disney.mp4'
import viewvideo2 from '../../videos/1564676714-pixar.mp4'
import viewvideo3 from '../../videos/1564676115-marvel.mp4'
import viewvideo4 from '../../videos/1608229455-star-wars.mp4'
import viewvideo5 from '../../videos/1564676296-national-geographic.mp4'

const Viewers = (props) => {
  return (
    <div className='viewers-container'>
      <div className="viewers-wrap">
        <img src={viewimg1} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src={viewvideo1} type="video/mp4"></video>
      </div>
      <div className="viewers-wrap">
        <img src={viewimg2} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src={viewvideo2} type="video/mp4"></video>
      </div>
      <div className="viewers-wrap">
        <img src={viewimg3} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src={viewvideo3} type="video/mp4"></video>
      </div>
      <div className="viewers-wrap">
        <img src={viewimg4} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src={viewvideo4} type="video/mp4"></video>
      </div>
      <div className="viewers-wrap">
        <img src={viewimg5} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} src={viewvideo5} type="video/mp4"></video>
      </div>
    </div>
  );
};

export default Viewers;
