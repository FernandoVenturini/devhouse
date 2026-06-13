import express from 'express'; // Import the Express framework
import routes from './routes'; // Import the routes module

class App { // 2- Define the App class

    constructor() { // 3- Initialize the App class
        this.server = express(); // 5- Create an instance of the Express application
        this.middlewares(); // 8- Call the middlewares method to set up middleware
        this.routes(); // 9- Call the routes method to set up routes
    }

    middlewares() { // 4- Define the middlewares method
        this.server.use(express.json()); // 6- Use the JSON middleware to parse incoming requests with JSON payloads
    }

    routes() { // 5- Define the routes method  
        this.server.use(routes); // 7- Use the routes defined in the routes module
    }
}

export default new App().server; // 10- Export the server instance of the App class