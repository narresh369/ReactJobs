# Start JSON Server on port 8000 (if needed for API testing or development)
npm run server &

# Build the React application
npm run build

# Serve the production build
# npx serve -s dist
PORT=${PORT:-10000} npx serve -s dist -l $PORT

