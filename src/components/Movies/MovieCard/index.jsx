import React from "react";
import { useLocation } from "react-router";

function MovieCard(props) {
    const { movie } = props;
    console.log("happ");
    const { primaryImage: image, titleText, releaseDate, plot } = movie;
    const location = useLocation();
    const addToWishList = (movie) =>{
      let arr = [];
      const favMovies = localStorage.getItem("favMovies");
      if(favMovies){
        arr = [...JSON.parse(favMovies)];
        arr.push(movie);
        localStorage.setItem("favMovies",JSON.stringify(arr));
        return true;
      }
      arr.push(movie);
      localStorage.setItem("favMovies",JSON.stringify(arr));
    };

    const checkMovieExists = (movie) =>{
        const favMovies = localStorage.getItem("favMovies");
        const isPresent = favMovies.findIndex((val) => val.id==movie.id );
        if(isPresent){
            return true;
        }
        return false;
    }

    const deleteMovieinWishlist = (movie) =>{
        let arr = [];
        const favMovies = localStorage.getItem("favMovies");
        if(favMovies){
          arr = [...JSON.parse(favMovies)];
          arr.filter((item) => movie.id !== item.id);
          localStorage.setItem("favMovies",JSON.stringify(arr));
          return true;
        }
    }
    return (
        <>
            <div className="card p-2 shadow-md">
                <div style={{ height: "300px" }}>
                    <img style={{ width: "100%", height: "100%" }} src={image.imageUrl} />
                </div>
                <h2 className="text-sm">{titleText.text}</h2>
                <h3 className="text-sm">Released: ${releaseDate.day}/{releaseDate.month}/{releaseDate.year}</h3>
                <h2 className="text-xs">{plot.plotText.plainText}</h2>
                {!checkMovieExists(movie) && location.pathname != "/wishlist" &&
                <button className="mt-5 text-red-600" onClick={addToWishList(movie)}>
                    Add to Wishlist
                </button>}
                {location.pathname == "/wishlist" && <button className="mt-5 text-black-600" onClick={deleteMovieinWishlist(movie)}>
                    Delete to Wishlist
            </button>}
            </div>
        </>
    )
}

export default MovieCard;