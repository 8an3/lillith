// Required dependencies or libraries
const { exec } = require('child_process');

// Constants for paths and commands
const BOATS_SERVER_PATH = '/api/apiBoats/app.js';
const MODELS_SERVER_PATH = '/api/apiModels/app.js';
const SERVER_START_COMMAND = 'node';

// Function to start the server
const startServer = (serverPath) => {
  exec(`${SERVER_START_COMMAND} ${serverPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }
    console.log('Server started successfully!');
  });
};

// Function to handle the HTTP request and start the server
const handleStartServerRequest = async (event, context) => {
  // Start the server logic
  startServer(BOATS_SERVER_PATH);
  startServer(MODELS_SERVER_PATH);

  return {
    statusCode: 200,
    body: 'Server started successfully!',
  };
};

// Export the serverless function
exports.handler = handleStartServerRequest;


/*// Required dependencies or libraries
const { exec } = require('child_process');

// Constants for paths and commands
const BOATS_SERVER_PATH = '.netlify/api/apiBoats/app.js';
const MODELS_SERVER_PATH = '.netlify/api/apiModels/app.js';
const SERVER_START_COMMAND = 'node';

// Function to start the server
const startServer = (serverPath) => {
  exec(`${SERVER_START_COMMAND} ${serverPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }
    console.log('Server started successfully!');
  });
};

// Function to stop the server
const stopServer = () => {
  exec('killall node', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error stopping server: ${error}`);
      return;
    }
    console.log('Server stopped successfully!');
  });
};

// Function to handle the command
const handleCommand = (command) => {
  if (command === 'hello') {
    console.log('Hello, world!');
    // Stop the servers after replying
    stopServer();
  } else {
    console.log('Unknown command!');
  }
};

// Start the boats server
startServer(BOATS_SERVER_PATH);

// Start the models server
startServer(MODELS_SERVER_PATH);

// Simulate receiving a command
const command = 'hello'; // Change this to the desired command
handleCommand(command);
*/