import React from 'react';
import {MdDelete, MdEdit} from 'react-icons/md';

function Movie({ movie, onDelete, onEdit }) {
    return (
        <tr>
            <td>{movie.name}</td>
            <td>{movie.reps}</td>
            <td>{movie.weight}</td>
            <td>{movie.unit}</td>
            <td>{movie.date}</td>
            <td><MdEdit onClick={() => onEdit(movie)}/></td>
            <td><MdDelete onClick={ () => onDelete(movie._id)}/></td>
        </tr>
    );
}

export default Movie;