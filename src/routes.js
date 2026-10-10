import { Router } from 'express'; // Import the Router class from the Express library
import multer from 'multer'; // Import the multer library for handling file uploads
import uploadConfig from './config/upload.js'; // Import the upload configuration from the config directory
import SessionController from './controllers/SessionController.js'; // Import the SessionController class from the controllers directory
import HouseController from './controllers/HouseController.js'; // Import the HouseController class from the controllers directory

const routes = new Router(); // Create a new instance of the Express Router
const upload = multer(uploadConfig); // Create an instance of the multer middleware with the upload configuration

routes.post('/sessions', SessionController.store); // Define a GET route for '/sessions' that invokes the store method of the SessionController

routes.post('/houses', upload.single('thumbnail'), HouseController.store); // Define a POST route for '/houses' that invokes the store method of the HouseController



export default routes; // Export the routes instance