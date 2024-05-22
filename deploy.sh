#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define directories
CLIENT_DIR="client"
SERVER_DIR="server"

# Step 1: Navigate to the client directory and install dependencies
echo "Installing client dependencies..."
cd $CLIENT_DIR
npm install

# Step 2: Build the client application
echo "Building the client application..."
npm run build

# Step 3: Navigate back to the root directory
cd ..

# Step 4: Navigate to the server directory and install dependencies
echo "Installing server dependencies..."
cd $SERVER_DIR
npm install

echo "Deployment script completed successfully."
