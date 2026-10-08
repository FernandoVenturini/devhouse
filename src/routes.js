import { Router } from 'express'; // Import the Router class from the Express library

const routes = new Router(); // Create a new instance of the Express Router

routes.get('/', (req, res) => { // Define a GET route for the root path
    return res.json({ message: 'Serving is running on port 3333!' }); // Send a JSON response with a message
});

export default routes; // Export the routes instance