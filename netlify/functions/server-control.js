// server-control.js

// Required dependencies or libraries
const { exec } = require('child_process');

// Constants for paths and commands
const DATA_PATH = '../../api/apiModels/data.csv';
const SERVER_START_COMMAND = 'node app.js';
const SERVER_STOP_COMMAND = 'killall node';

// Function to start the server
const startServer = () => {
  exec(SERVER_START_COMMAND, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }
    console.log('Server started successfully!');
  });
};

// Function to stop the server
const stopServer = () => {
  exec(SERVER_STOP_COMMAND, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error stopping server: ${error}`);
      return;
    }
    console.log('Server stopped successfully!');
  });
};

// Function to clear the data
const clearData = () => {
  // Implement logic to clear or truncate the data file (data.csv) here
  console.log('Data cleared successfully!');
};

// Function to update the data
const updateData = () => {
  // Implement logic to update the data file (data.csv) here
  console.log('Data updated successfully!');
};

// Example of timed starting and stopping
const startAndStopTimed = () => {
  // Start the server
  startServer();

  // Wait for a specific duration (e.g., 10 seconds) before stopping the server
  setTimeout(() => {
    stopServer();
  }, 10000); // 10 seconds
};

// Export the functions or endpoints for use as Netlify serverless functions
module.exports = {
  startServer,
  stopServer,
  clearData,
  updateData,
  startAndStopTimed,
};
const { exec } = require('child_process');

// Constants for paths and commands
const CARS_API_PATH = '../../api/apimodels/cars-api';
const BOATS_API_PATH = '../../api/apiBoats/boats-api';

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
  startCarsServer,
  startBoatsServer,
};
