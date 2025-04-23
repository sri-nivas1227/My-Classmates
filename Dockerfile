# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .    

# Use args to get the value of REACT_APP_BACKEND_URL
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
# CMD ["npm", "run", "build"]
# EXPOSE 3000
# CMD ["npm", "start"]
# # Build the React app for production
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend files
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf