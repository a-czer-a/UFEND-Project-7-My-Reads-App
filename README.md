# MyReads Project

This is the 7th project for Udacity Front-End Nanodegree build on top of the starter template containing a static example of what should be made interactive with React. The template was provided by Udacity.

The application allows the user to search for books, select them and add to one of three categorized bookshelfs: currently reading, want to read and read.

The user can check the basic information (like publisher, language, rating or description - if they are available) on each book using "details" button.

## Installation

To get started you need to have Node.js and npm installed on your computer. Then:

* clone this git repository 
`$ git clone git@github.com:a-czer-a/UFEND-Project-7-My-Reads-App.git`
or download a zipped file
* go to the directory with downloaded or cloned project files 
* install dependencies with `npm install` or `yarn install`
* use command line `npm start` or `yarn start` to run the application in a new browser tab/window (this will start the development server). By default server runs on port 3000.

## Note about API

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Project Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), so all dependencies will be automatically installed. These are:

* prop-types
* sort-by
* react-router-dom

