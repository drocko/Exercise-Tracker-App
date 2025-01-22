import React from 'react';
import Movie from './Movie';

function MovieList({ movies, onDelete, onEdit }) {
    return (
        <table id="movies">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Units</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, i) => <Movie movie={movie}
                onDelete = {onDelete}
                onEdit = {onEdit}
                key={i} />)}
            </tbody>
        </table>
    );
}

export default MovieList;
