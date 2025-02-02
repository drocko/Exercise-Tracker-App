import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true, min: 1},
    weight: {type: Number, required: true, min: 1},
    unit: {type: String, required: true},
    date: {type: String, required: true},
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async(name, reps, weight, unit, date) => {
    const exercise = new Exercise ({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save()
}

const findExerciseById= async(_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

const findExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.updateOne({ _id: _id}, {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;
}

const deleteExerciseById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}

export {createExercise, findExerciseById, findExercises, replaceExercise, deleteExerciseById};
