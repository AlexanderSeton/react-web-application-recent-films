import React, {useState} from "react";
import FilmReleaseList from "../components/FilmReleaseList";
import FilmReleaseLink from "../components/FilmReleaseLink";
import FilmReleaseForm from "./FilmReleaseForm";

const FilmReleaseBox = () => {

    let [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]          
    );

    const addFilmRelease = (submittedFilmRelease) => {
        submittedFilmRelease.id = Date.now();
        const updatedFilmReleases = [...films, submittedFilmRelease];
        setFilms(updatedFilmReleases);
    };

    return (
        <>
            <h1>Upcoming Film Releases (UK)</h1>
            <FilmReleaseForm onFilmSubmit={addFilmRelease} />
            <FilmReleaseList films={films} />
            <FilmReleaseLink />
        </>
    );
};

export default FilmReleaseBox;
