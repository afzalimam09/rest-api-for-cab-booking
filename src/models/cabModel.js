import mongoose from "mongoose";

import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

// Creating cab schema
const cabSchema = new Schema({
    booked: {
        type: Boolean,
        default: false
    },
    location: {
        // GeoJSON
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number] // [lng, lat]
    },
    driver: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'A cab must have a driver']
    }
});

// Populate the driver
cabSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'driver',
        select: '-__v -passwordChangedAt'
    });
    next();
});

cabSchema.index({ location: '2d' });

// Creating model from schema

export default db.model('Cab', cabSchema);