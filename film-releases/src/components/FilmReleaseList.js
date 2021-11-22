import React from "react";
import FilmReleaseObject from "./FilmReleaseObject";
import "./static/FilmReleaseList.css";

const FilmReleaseList = ({films}) => {

    const createFilmNodes = films.map((film) => {
        return (
            <li className="film-list-li" key={film.id}><FilmReleaseObject name={film.name} url={film.url}></FilmReleaseObject></li>
        );
    });

    return (
        <ul id="film-list">{createFilmNodes}</ul>
    );
};

export default FilmReleaseList;
