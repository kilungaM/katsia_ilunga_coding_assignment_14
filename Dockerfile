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

# Set working directory as required
WORKDIR /ilunga_katsia_final_site

# Copy optimized build from Stage 1
COPY --from=build /ilunga_katsia_final_site/build /usr/share/nginx/html

# Container runs Nginx internally on 80
EXPOSE 80

# Start server
CMD ["nginx", "-g", "daemon off;"]
