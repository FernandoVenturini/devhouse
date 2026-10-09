import { Schema, model } from 'mongoose'; // Import the Schema and model functions from the Mongoose library

const UserSchema = new Schema({ // Define the User schema for MongoDB
    email: String,// Define the email field as a string
});

const User = model('User', UserSchema);// Export the User model for use in other parts of the application

export default User;// Export the User model for use in other parts of the application