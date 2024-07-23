import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios'
import Pagination from "./Pagination";
function Movies() {
    const [Movies, setState]=useState([]);
    const [PageNo, setPageNo]=useState([1]);

        const handelpre=() => {
            if(PageNo===1){
                setPageNo(PageNo);
            }
            else{
                setPageNo(PageNo-1);  
            }
            
        }

        const handelnext=() =>{
            setPageNo(PageNo+1);
        }


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2e546f7b22f819e5444bcd69bee9d4f5&language=en-US&page=${PageNo}`).then(function(res){
            setState(res.data.results);
        });
    },[PageNo])
  return (
    <div className="p-5">
      <div className="font-bold text-center text-2xl m-3">Treding Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {Movies.map((movieObj)=>{
                return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
      </div>
      <Pagination PageNo={PageNo} handelpre={handelpre} handelnext={handelnext}/>
    </div>
  );
}

export default Movies;
