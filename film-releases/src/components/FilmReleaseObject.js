import React from "react";

const FilmReleaseObject = ({name, url}) => {

    return (
        <a href={url} target="_blank">{name}</a>
    );
};

export default FilmReleaseObject;
