import React from 'react'
import './home.css'
import Imgslider from '../Imgslider/Imgslider';
import Viewers from '../Viewers/Viewers';
import Recommends from '../Recommends/Recommends';
import NewDisney from '../Newdisney/NewDisney';
import Originals from '../Originals/Originals';
import Trending from '../Trending/Trending';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import db from '../../firebase'
import { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div className='main'>
      <Imgslider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />

    </div>
  )
}

export default Home;
