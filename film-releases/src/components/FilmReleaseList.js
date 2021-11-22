import React from "react";
import FilmReleaseObject from "./FilmReleaseObject";

const FilmReleaseList = ({films}) => {

    const createFilmNodes = films.map((film) => {
        return (
            <li><FilmReleaseObject name={film.name} url={film.url}></FilmReleaseObject></li>
        );
    });

    return (
        <ul>{createFilmNodes}</ul>
    );
};

export default FilmReleaseList;
