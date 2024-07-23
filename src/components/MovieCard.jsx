import React from "react";

function MovieCard({poster_path , name}) {
  return (
    <div className='h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-row justify-between items-end'
      style={{
        backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`
      }}>
        <div className="text-white text-xl w-full text-center p-2 bg-gray-900/60">
            {name}
        </div>
    </div>
  );
}

export default MovieCard;
