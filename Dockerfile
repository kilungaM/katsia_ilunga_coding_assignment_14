# --- Stage 1: Build the React app ---
FROM node:18 AS build

# Create working directory inside container
WORKDIR /ilunga_katsia_final_site

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy entire project
COPY . .

# Build production version
RUN npm run build

# --- Stage 2: Serve build with Nginx ---
FROM nginx:alpine

# Set working directory inside container (matches rubric)
WORKDIR /ilunga_katsia_final_site

# Copy optimized build from Stage 1
COPY --from=build /ilunga_katsia_final_site/build /usr/share/nginx/html

# Expose port 5575 for rubric requirement
EXPOSE 5575

# Start Nginx and serve build
CMD ["nginx", "-g", "daemon off;"]
