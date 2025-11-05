# Stage 1: Build
FROM node:18 AS build
WORKDIR /kilunga_katsia_ui_garden_build_checks
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
WORKDIR /kilunga_katsia_ui_garden_build_checks
COPY --from=build /kilunga_katsia_ui_garden_build_checks/build /usr/share/nginx/html
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
