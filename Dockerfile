# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript code without type checking
RUN npm install -g typescript && tsc --skipLibCheck

# Expose the port your application will run on
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "start"]
