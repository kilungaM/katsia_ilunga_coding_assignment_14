#  Portfolio Website – Assignment 14

This project is a portfolio website built using **Create React App** and packaged and deployed using **Docker**. The site highlights course work completed throughout the Full-Stack Web Development program.

---

##  Running the Application with Docker

### 1️ Build the Docker Image

Run the following command in the project root:

```bash
docker build -t ilunga_katsia_coding_assignment14 .
2️ Run the Container
bash

docker run -p 5575:5575 ilunga_katsia_coding_assignment14
3️ Open the Application
Once the container is running, open:

cpp

http://127.0.0.1:5575
This will load the production build of the React portfolio site.

 Docker Container Requirements
✔ Container name: ilunga_katsia_coding_assignment14
✔ Site files hosted in working directory:


/Ilunga_Katsia_final_site
✔ Runs a production build of the Create React App
✔ Exposes and serves on port 5575

 Project Structure
css

src/
 ├─ components/
 ├─ pages/
 ├─ data/
 ├─ App.js
 └─ index.js
 Portfolio Sections
This portfolio includes:

Basic Information

Work / Projects

Skills

Resources

Developer Setup

Each section is built using reusable React components.

Tools & Development Setup
This project uses:

React

ESLint

Prettier

Husky

Git for version control

Jest for unit tests

Docker for deployment

These tools ensure code quality, formatting consistency, and repeatable application deployment.

Running Tests
To run Jest tests:

bash

npm test



