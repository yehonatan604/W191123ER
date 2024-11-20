import { Schema, model } from "mongoose";

const carSchema = new Schema({
    brand: String,
    name: {
        type: String,
        required: true,
        unique: true
    },
    year: Number
});

export const Car = model('Car', carSchema);
