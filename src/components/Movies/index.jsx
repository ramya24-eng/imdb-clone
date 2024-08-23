import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies(props) {
    const { movies } = props;
    console.log("mov", movies);
    return (<>
        <div className="grid grid-cols-4 gap-4 mt-10">
            {movies.map((movie) => {
                <MovieCard movie={movie} key={movie.id}/>
                console.log(movie)
            })}
        </div>
        <Pagination />
    </>);
}

export default Movies;