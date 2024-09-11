#!/bin/bash

# Start JSON Server on port 8000
npm run server &

# Build the React application
npm run build

# Serve the production build
# npx serve -s dist
PORT=10000 npx serve -s dist

