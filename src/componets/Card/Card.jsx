import React, { useEffect, useState } from 'react';
import Sidemenu from '../Sidemenu/Sidemenu';
import Movie from './../Movie/Movie';





const Card = () => {
  const [movies,setMovie]=useState([])
  const [timer,setTimer]=useState('')
  useEffect(()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setMovie(data))

  },[])
 
  const handleWatchTime =(time)=>{
    const previousWatchTime =JSON.parse(localStorage.getItem('watchTime'))
    if(previousWatchTime){
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime',sum)
      setTimer(sum)
      }
    else{
     localStorage.setItem('watchTime',time)
     setTimer(time)
    }
  }

  return (
  <div className='flex w-11/12 mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%]'>
     {
      movies.map((movie)=>
      
      <Movie movie={movie} 
      handleWatchTime={handleWatchTime}
      ></Movie>)
     }
    </div>
    <div className='w-[20%]'>
    <Sidemenu timer={timer} ></Sidemenu>
    </div>
  </div>
  );
};

export default Card;