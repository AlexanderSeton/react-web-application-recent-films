import React from "react";

const FilmReleaseObject = ({name, url}) => {

    return (
        <a href={url}>{name}</a>
    );
};

export default FilmReleaseObject;
