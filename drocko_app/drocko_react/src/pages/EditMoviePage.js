import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditMoviePage = ({movieToEdit}) => {

    const [name, setName] = useState(movieToEdit.name);
    const [reps, setReps] = useState(movieToEdit.reps);
    const [weight, setWeight] = useState(movieToEdit.weight);
    const [unit, setUnit] = useState(movieToEdit.unit);
    const [date, setDate] = useState(movieToEdit.date);

    const navigate = useNavigate()

    const editMovie = async () => {
        const response = await fetch(`/exercises/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: name, reps: reps, weight: weight, unit: unit, date: date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the exercise!");
        } else {
             alert(`Failed to edit exercise, status code = ${response.status}`);
        }     
        navigate("/");
    };

    return (
        <div>
            <h1>Edit an Exercise</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />

            <select type = "text" value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            
            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={editMovie}
            >Save</button>
        </div>
    );
}

export default EditMoviePage;