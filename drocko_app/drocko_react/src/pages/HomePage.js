import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({setMovieToEdit}) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const onDelete = async id => {
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
        const getResponse = await fetch('/exercises');
        const movies = await getResponse.json();
        setMovies(movies);
        } else {
        console.error(`Failed to delete movie with id = ${id}, status code = ${response.status}`)
        }
    };	

    const onEdit = movie => {
        setMovieToEdit(movie)
        navigate("/edit-exercise")
    }

    const loadMovies = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setMovies(data);
    };



    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <MovieList movies={movies} onDelete={onDelete} onEdit={onEdit}></MovieList>
            <Link to="/add-exercise">Add an exercise</Link>
        </>
    );
}

export default HomePage;