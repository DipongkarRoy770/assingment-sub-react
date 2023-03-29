import React from 'react';

const Movie = ({movie,handleWatchTime}) => {
  return (
    <div className='mt-12 pl-0'>
      <div className="card w-80 h-96 bg-base-100 shadow-2xl">
          <figure className='w-full'>
            <img src={movie.poster} alt="Shoes" />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{movie.movieName}</h2>
            <p>{movie.description}</p>
             <div className='flex justify-between'>
              <p>watch:{movie.watchTime}</p>
              <p>ratting:{movie.imdbRating}</p>
             </div>
             <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-base-50 hover:btn btn-primary'>book now</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;