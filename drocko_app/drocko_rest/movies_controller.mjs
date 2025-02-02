import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = process.env.PORT;
// const { query } = require('express-validator')
const app = express();

/**
*
* @param {string} date
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

app.use(express.json());

/**
 * Create a new movie with the title, year and language provided in the body
 */
app.post('/exercises', (req, res) => {
    if (!isDateValid(req.body.date)) {
        return res.status(400).json({ error: 'Invalid date format. Date should be in MM-DD-YY format.' });
    };
    if (req.body.reps <= 0) {
        return res.status(400).json({ error: 'Invalidated' });
    };
    if (req.body.weight <= 0) {
        return res.status(400).json({ error: 'Invalidated' });
    };
    // res.status(501).send({ Error: "Not implemented yet" });
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request has failed' });
        })
});


/**
 * Retrive the movie corresponding to the ID provided in the URL.
 */
app.get('/exercises/:_id', (req, res) => {

    // res.status(501).send({ Error: "Not implemented yet" });
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request to find movie has failed' });
        })
});

/**
 * Retrieve exercises. 
 * If the query parameters include a year, then only the exercises for that year are returned.
 * Otherwise, all exercises are returned.
 */
app.get('/exercises', (req, res) => {
    // res.status(501).send({ Error: "Not implemented yet" });
    let filter = {};
    if (req.query.year !== undefined) {
        filter = {year: req.query.year};
    }

    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.json(exercises);
        })
        .catch(error => {
            console.error(error);
        })
});

/**
 * Update the movie whose id is provided in the path parameter and set
 * its title, year and language to the values provided in the body.
 */
app.put('/exercises/:_id', (req, res) => {
    if (!isDateValid(req.body.date)) {
        return res.status(400).json({ error: 'Invalid date format. Date should be in MM-DD-YY format.' });
    };
    if (req.body.reps <= 0) {
        return res.status(400).json({ error: 'Invalidated' });
    };
    if (req.body.weight <= 0) {
        return res.status(400).json({ error: 'Invalidated' });
    };
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1 ) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
});

/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExerciseById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1 ) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});