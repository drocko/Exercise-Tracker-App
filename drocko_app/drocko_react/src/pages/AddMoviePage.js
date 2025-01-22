import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddMoviePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate()
    
    const addMovie = async () => {
        const newMovie = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Enter amount of reps here"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            {/* <input
                type="text"
                placeholder="Enter unit of weight here"
                value={unit}
                onChange={e => setUnit(e.target.value)} /> */}
            
            <select type = "text" value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="">Pick a unit</option>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            
            <input
                type="text"
                placeholder="Enter Date (mm-dd-yy)"
                value={date}
                onChange={e => setDate(e.target.value)} />


            {/* <input
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="number"
                value={year}
                placeholder="Enter year here"
                onChange={e => setYear(e.target.value)} />
            <input
                type="text"
                placeholder="Enter language here"
                value={language}
                onChange={e => setLanguage(e.target.value)} /> */}
            <button
                onClick={addMovie}
                >Add</button>
        </div>
    );
}

export default AddMoviePage;