import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../utils/const";
import { Box, Modal, Typography } from "@mui/material";

export default function Table() {
    const [movies, setMovies] = useState([]);
    const [modalPayload, setModalPayload] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        // to zadziała tylko za pierwszym załadowaniem komponentu
        fetchData();
      }, []);

    const fetchData = () => {
        axios.get( baseURL).then((response) => {
            setMovies(response.data.data);
            // console.log('response', response)
        }).catch(err => {
            console.log(err)
        });
    }
    
      const movieDelete = (id) => {
        axios.delete(`${baseURL}/${id}`)
            .then( response => {
                // sięgnięcie po nowe dane do bazy
                fetchData();
                console.log('response', response)
            })
            .catch(err => {
                console.log('error', err)
            })
    }

    const openDetailsModal = (movie) => {
          setModalPayload(movie);
          setOpenModal(true);
    }

    const closeDetailsModal = () => {
        setModalPayload(null);
        setOpenModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const modal =  modalPayload && <Modal
        open={openModal}
        onClose={closeDetailsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="span">
                Movie details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>
                    <p>ID: {modalPayload.id}</p>
                    <p>TITLE: {modalPayload.attributes.title}</p>
                    <p>AUTHOR: {modalPayload.attributes.author}</p>
                    <p>DESCRIPTION: {modalPayload.attributes.description}</p>
                    <p>AVAILABLE: {modalPayload.attributes.available.toString()}</p>
                    <p>YEAR: {modalPayload.attributes.year}</p>
                </div>
            </Typography>
        </Box>
    </Modal>

    const moviesList = movies && movies.map(movie => (
        <tr key={movie.id}>
            <td className="td-border">{movie.id}</td>
            <td className="td-border">{movie.attributes.title}</td>
            <td className="td-border">{movie.attributes.author}</td>
            <td className="td-border">{movie.attributes.year}</td>
            <td className="td-border">{movie.attributes.available.toString()}</td>
            <td><button onClick={() => movieDelete(movie.id)}>DELETE</button></td>
            <td><button className="button-modal" onClick={() => openDetailsModal(movie)}>DETAILS</button></td>
        </tr>
    ))

    return  (
        <div>
            { openModal && modal }
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
                    { moviesList }
                </tbody>
            </table>
        </div>
    );
}