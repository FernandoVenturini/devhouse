import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express'; // Import the Express framework
import mongoose from 'mongoose'; // Import the Mongoose library for MongoDB interactionq
import routes from './routes.js'; // Import the routes module

class App { // 2- Define the App class

    constructor() { // 3- Initialize the App class
        this.server = express(); // 5- Create an instance of the Express application

        // 6- Connect to the MongoDB database
        mongoose.connect('mongodb://devHouse:devhouse@ac-i6aicaz-shard-00-00.2diofcj.mongodb.net:27017,ac-i6aicaz-shard-00-01.2diofcj.mongodb.net:27017,ac-i6aicaz-shard-00-02.2diofcj.mongodb.net:27017/devhouse?ssl=true&replicaSet=atlas-l1z1hb-shard-0&authSource=admin&appName=devHouse') 
        .then(() => console.log('✅ MongoDB conectado'))
        .catch((err) => console.error('❌ Erro no MongoDB:', err.message));

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