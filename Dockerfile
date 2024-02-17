# Use an official Node.js runtime as a base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose the port that Nuxt.js will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]