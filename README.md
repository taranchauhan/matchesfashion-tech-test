# MatchesFashion Technical Test

This is an implementation of the MatchesFashion Node.js technical test at https://github.com/matchesfashion/technical-test

## Prerequisites

This repository assumes that you have the following installed:

1. Node 10
2. npm

## Configuration file

The file `src/config.js` contains the list of URL's that the `fetchUrlList` function in `src/index.js` will fetch from.

This is prepopulated with the required list.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the app dependencies

### `npm start`

Invokes the `fetchUrlList()` function in `src/index.js` and console logs the result.

### `npm test`

Runs the test case in `src/test/index.test.js` to verify that the URL's specified in `src/config.js` return the expected array of objects in the correct format.
