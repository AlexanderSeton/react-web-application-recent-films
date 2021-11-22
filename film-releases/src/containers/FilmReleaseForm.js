import React, {useState} from "react";
import "./static/FilmReleaseForm.css";

const FilmReleaseForm = ({onFilmSubmit}) => {

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleFilmReleaseSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();
        if (!titleToSubmit || !urlToSubmit) {
            return
        }
        // pass data to parent
        onFilmSubmit({name: titleToSubmit, url: urlToSubmit});
        // reset form
        setTitle("");
        setUrl("");
    };

    return (
        <form onSubmit={handleFilmReleaseSubmit} id="new-film-form">
            <input type="text" placeholder="Film Title..." value={title} onChange={handleTitleChange} className="form-input" />
            <input type="text" placeholder="IMBd URL..." value={url} onChange={handleUrlChange} className="form-input" />
            <input type="submit" value="Add Film" id="form-button" />
        </form>
    );
};

export default FilmReleaseForm;
