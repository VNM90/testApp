import React, {useState} from "react";
import axios from "axios";
import Modal from "@material-ui/core/Modal"

const baseURL = "http://localhost:3000/movies";
// const baseURL =  "https://w-strapi-movies-app-9wxhf.ondigitalocean.app/api/movies/"

export default function Table() {

    const [movies, setMovies] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setMovies(response.data.data);
        }).catch(err => {
            console.log(err)
        });
      }, []);
    
      const movieDelete = (id) => {
        axios.delete(`http://localhost:3000/movies/${id}`)
        // I should update the State
        window.location.reload(false)
    }

    const [open, setOpen] = useState(false);

    const handleClose = (id) => {
        setOpen(false);
    };

    const handleOpen = (id) => {
        setOpen(true)
    };

    return  (
        <div>
            <h3>TABLE OF MOVIES</h3>
            <table className="table-component">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>YEAR</th>
                        <th>AVAILABLE</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => {
                        return (
                            <tr key={movie.id}>
                                <td className="td-border">{movie.id}</td>
                                <td className="td-border">{movie.attributes.title}</td>
                                <td className="td-border">{movie.attributes.author}</td>
                                <td className="td-border">{movie.attributes.year}</td>
                                <td className="td-border">{movie.attributes.available.toString()}</td>
                                <td><button onClick={() => movieDelete(movie.id)}>DELETE</button></td>
                                <td><button className="button-modal" onClick={() => handleOpen(movie.id)}>DETAILS</button></td>
                                <Modal className="modal" onClose={handleClose} open={open}>
                                    <div>
                                        <span>{movie.id}</span>
                                        <span>{movie.attributes.title}</span>
                                        <span>{movie.attributes.author}</span>
                                    </div>   
                                </Modal>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}