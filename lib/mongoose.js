import mongoose from "mongoose";

// Function to connect to MongoDB using Mongoose
export function mongooseConnect() {
    const uri = process.env.MONGODB_URI;
    if (mongoose.connection.readyState === 1) {
                // If the connection is already open, return it as a Promise
        return mongoose.connection.asPromise();
    } else {
                // If the connection is not open, connect to the MongoDB database using the URI
        return mongoose.connect(uri);
    }
}