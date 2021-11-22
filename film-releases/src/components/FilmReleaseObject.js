import React from "react";
import "./static/FilmReleaseObject.css"

const FilmReleaseObject = ({name, url}) => {

    return (
        <a href={url} target="_blank" rel="noreferrer" className="film-list-li-content">{name}</a>
    );
};

export default FilmReleaseObject;
