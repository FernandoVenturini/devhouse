import { Router } from 'express'; // Import the Router class from the Express library
import SessionController from './controllers/SessionController.js'; // Import the SessionController class from the controllers directory

const routes = new Router(); // Create a new instance of the Express Router

routes.post('/sessions', SessionController.store); // Define a GET route for '/sessions' that invokes the store method of the SessionController



export default routes; // Export the routes instance