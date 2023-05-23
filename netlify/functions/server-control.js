// Required dependencies or libraries
const { exec } = require('child_process');

// Constants for paths and commands
<<<<<<< HEAD
const BOATS_SERVER_PATH = '/api/apiBoats/app.js';
const MODELS_SERVER_PATH = '/api/apiModels/app.js';
const SERVER_START_COMMAND = 'node';
=======
const DATA_PATH = '../../api/apiModels/server-control.js';
const DATA_PATH1 = '../../api/apiBoats/serverAPI.js';
const SERVER_START_COMMAND = 'node app.js';
const SERVER_STOP_COMMAND = 'killall node';
>>>>>>> 4fb4365885baf4123494fe6bb949d9231f52feb1

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

<<<<<<< HEAD
// Start the boats server
startServer(BOATS_SERVER_PATH);

// Start the models server
startServer(MODELS_SERVER_PATH);

// Simulate receiving a command
const command = 'hello'; // Change this to the desired command
handleCommand(command);
*/
=======
// Constants for paths and commands
const CARS_API_PATH = '../../api/apiModels/serverAPI';
const BOATS_API_PATH = '../../api/apiBoats/serverAPI';

// Function to start the server for the Cars API
const startCarsServer = () => {
  exec('node app.js', { cwd: CARS_API_PATH }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting Cars API server: ${error}`);
      return;
    }
    console.log('Cars API server started successfully!');
  });
};
// Function to start the server for the Boats API
const startBoatsServer = () => {
  exec('node app.js', { cwd: BOATS_API_PATH }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting Boats API server: ${error}`);
      return;
    }
    console.log('Boats API server started successfully!');
  });
};

// Export the functions for use as Netlify serverless functions

module.exports = {
  startServer,
  stopServer,
  clearData,
  updateData,
  startAndStopTimed,
  startCarsServer,
  startBoatsServer,
};
>>>>>>> 4fb4365885baf4123494fe6bb949d9231f52feb1
