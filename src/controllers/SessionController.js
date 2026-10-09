import User from '../models/User.js';// Import the User model to interact with user data in the database 


class SessionController {// Define the SessionController class to handle session-related operations

    async store(req, res) {// Define the store method to handle the creation of a new session
        const {email} = req.body;// Extract the email from the request body

        let user = await User.findOne({ email });// Search for an existing user in the database with the provided email
        if (!user) {
            user = await User.create({ email });// If the user does not exist, create a new user in the database with the provided email
        }
        //let user = await User.create({ email });// Create a new user in the database with the provided email

        return res.json({ user });// Return the created user as a JSON response
    };
};



export default new SessionController();// Export an instance of the SessionController class for use in other parts of the application