import React, {useState} from "react";
// import axios from "axios";

// const baseURL = "http://localhost:3000/data";

export default function Forms() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [available, setAvailable] = useState(false);
    const toggleAvailable = () => setAvailable(value => !value);
    const [desription, setDescription] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
        const attributes = { title, author, date, available, desription }
        console.log(attributes)
        // const postData = (e) => {
        //     e.preventDefault();
        //     axios.post(baseURL, {
        //         attributes
        //     })
        //     .then(() => {
        //         console.log("new movie added")
        //     });
        // }   
    
     }
    return (
        <div>
            <h3>ADD MOVIE</h3>
            <form className="form-container" onSubmit={handleSumbit}>
                <input 
                    type="text" 
                    placeholder="title" 
                    required 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}>
                </input>
                <input 
                    type="text" 
                    placeholder="author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}>    
                </input>
                <input 
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}>    
                </input>
                
                <label>Available:</label>
                <input className="checkbox"
                    type="checkbox"
                    checked={available}
                    onChange={toggleAvailable}>
                 </input>
                <textarea cols="30" rows="5"
                    placeholder="desription"
                    value={desription}
                    onChange={(event) => setDescription(event.target.value)}>     
                </textarea>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}



