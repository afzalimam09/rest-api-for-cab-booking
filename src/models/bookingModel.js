import mongoose from "mongoose";
import db from '../connections/dbConnection.js';

const Schema = mongoose.Schema;

// Creating booking schema
const bookingSchema = new Schema({
    cab: {
        type: Schema.ObjectId,
        ref: 'Cab'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'Booking must belong to a user!']
    },
    from: {
        // GeoJSON
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String
    },
    to: {
        // GeoJSON
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String
    },
    distance: Number,
    fare: {
        type: Number,
        required: [true, 'Booking must have price!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to populate the user and cab
bookingSchema.pre(/^find/, function(next) {
    this.populate('user').populate({
        path: 'cab'
    });

    next();
});

const Booking = db.model('Booking', bookingSchema);

export default Booking;