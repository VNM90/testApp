import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/const";

export default function Forms() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [available, setAvailable] = useState(false);
    const [description, setDescription] = useState("");
    const toggleAvailable = () => setAvailable(value => !value);

    const handleSumbit = (event) => {
        event.preventDefault();
        const attributes = {
            data: {
                title, author, year, available, description
            } }
        console.log('attributes', attributes)
        axios.post(baseURL, attributes)
            .then(response => {
                console.log('response from post', response)
            })
     }

    return (
        <div>
            <h3>ADD MOVIE</h3>
            <form className="form-container" onSubmit={handleSumbit}>
                <input 
                    type="text" 
                    placeholder="TITLE" 
                    required 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}>
                </input>
                <input 
                    type="text" 
                    placeholder="AUTHOR"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}>    
                </input>
                <input 
                    type="date"
                    value={year}
                    required
                    onChange={(event) => setYear(event.target.value)}>
                </input>
                <span>
                <label>AVAILABLE: </label>
                <input className="checkbox"
                    type="checkbox"
                    checked={available}
                    onChange={toggleAvailable}>
                 </input>
                 </span>
                <textarea cols="30" rows="5"
                    placeholder="DESCRIPTION"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}>     
                </textarea>
                <button className="button-form-submit">SUBMIT</button>
            </form>
        </div>
    );
}



