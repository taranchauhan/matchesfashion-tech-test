# MatchesFashion Technical Test

This is an implementation of the MatchesFashion Node.js technical test at https://github.com/matchesfashion/technical-test

## Prerequisites

This repository assumes that you have the following installed:

1. Node 10
2. npm

## Editing Config to change URL's

You will only need to edit `src/config.js`, which contains the list of URL's that the function in `src/index.js` will fetch from.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the app dependencies

### `npm start`

Invokes the `fetchUrlList()` function in `src/index.js` and console logs the result.

### `npm test`

Runs the test case in `src/test/index.test.js` to verify that the URL's specified in `src/config.js` return the expected array of objects in the correct format.
