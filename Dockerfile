# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (include dev deps since we build at container start)
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Build at container start so NEXT_PUBLIC_* env vars from docker-compose are inlined
# into the client bundle (e.g., NEXT_PUBLIC_FORMSPREE_ID)
CMD ["sh", "-c", "npm run build && npm start"]