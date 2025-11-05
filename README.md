Assignment 12
**Student Name:** Katsia Ilunga
**Course:** Web Development
**Assignment:** Building a Component Library

## What This Project Is About

This project is a collection of 13 reusable UI components built with React. Each component can be used to build websites and web applications. The components are styled, tested, and documented using Storybook.

## List of Components

This library includes the following 13 components:

1. Button
2. Label
3. Text
4. Table
5. Table Header
6. Table Row
7. Table Cell
8. Table Footer
9. Dropdown
10. Radio Button
11. Image
12. Hero Image
13. Card

## What Each Component Includes

Every component has 5 files:

- **Types file** - Defines what data the component needs
- **Component file** - The actual React component code
- **Stories file** - Shows the component in Storybook
- **Tests file** - Contains 2 tests (visibility and disabled state)
- **Index file** - Exports the component for easy import

## How to Run This Project

### Step 1: Install the Required Software

Before you start, make sure you have:

- Node.js installed on your computer
- Docker Desktop installed and running

### Step 2: Download the Project

bash
git clone <your-github-link>
cd ilunga_katsia_ui_garden

### Step 3: Install All Dependencies

bash
npm install

This command downloads all the packages needed for the project.

### Step 4: Start the Development Server

bash
npm start

This opens the app in your browser at: http://localhost:3000

### Step 5: View Components in Storybook

bash
npm run storybook

This opens Storybook in your browser at: http://localhost:6006

Storybook lets you see and test each component individually.

### Step 6: Run All Tests

bash
npm test

This runs all the component tests to make sure everything works correctly.

## How to Run with Docker

Docker creates a container that packages your app so it can run anywhere.

### Step 1: Build the Docker Image

bash
docker build -t ilunga_katsia_coding_assignment12 .

This creates a Docker image from your project. It may take a few minutes.

### Step 2: Run the Docker Container

bash
docker run -p 8083:8083 --name ilunga_katsia_coding_assignment12 ilunga_katsia_coding_assignment12

This starts your app in a Docker container.

### Step 3: View Your App

Open your browser and go to: **http://localhost:8083**

## Project Folder Structure

``
ilunga_katsia_ui_garden/
src/
│ components/
│ │ Button/
│ │ Label/
│ │ Text/
│ │ Table/
│ │ TableHeader/
│ │ TableRow/
│ │ TableCell/
│ │ mTableFooter/
│ │ Dropdown/
│ │ RadioButton/
│ │ Img/
│ │ HeroImage/
│ │ Card/
│ App.tsx
Dockerfile
package.json
README.md
