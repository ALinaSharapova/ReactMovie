import {Movie} from "./Movie";
import {Picture} from "./picture";

function Movies(props){
    const {movies = [] } = props;

    return(
        <div className="movies">
        {movies.length ? (movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)) : (<Picture/>)}
        
    </div>
    ) 
}

export {Movies};