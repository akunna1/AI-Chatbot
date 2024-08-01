const express = require('express'); // Importing the Express framework for building web applications
const cors = require('cors'); // Importing the CORS middleware to enable Cross-Origin Resource Sharing
const bodyParser = require('body-parser'); // Importing the body-parser middleware to parse incoming request bodies
const chatGptController = require('./chatGpt.controller'); // Importing the chatGptController module for handling requests to the /chatbot endpoint

const app = express(); // Creating an instance of the Express application
app.use(cors()); // Using the CORS middleware to allow cross-origin requests
app.use(bodyParser.json()); // Using the body-parser middleware to parse JSON request bodies

app.post('/chatbot', chatGptController.askToChatGpt); // Defining a POST route for /chatbot that uses the askToChatGpt function from chatGptController

const PORT = process.env.PORT || 3000; // Setting the port for the server to listen on, using the environment variable PORT or defaulting to 3000
app.listen(PORT, () => { // Starting the server and listening on the specified port, logging a message to the console
  console.log(`Server is running on port ${PORT}`);
});
