import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
const isLargeRow = true;
export { isLargeRow };

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2 className="rowTitle">{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    ></img>
                ))}
            </div>
        </div >
    );
};

export default Row;