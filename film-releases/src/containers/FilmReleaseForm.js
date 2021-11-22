import React, {useState} from "react";

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
        <form onSubmit={handleFilmReleaseSubmit}>
            <input type="text" placeholder="Film Title..." value={title} onChange={handleTitleChange} />
            <input type="text" placeholder="IMBd URL..." value={url} onChange={handleUrlChange} />
            <input type="submit" />
        </form>
    );
};

export default FilmReleaseForm;
