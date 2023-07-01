# English Test

The English Test App is a web application that allows users to take a multiple choice grammar test and receive a rank based on their score. 
The app has two parts:
- a backend built on Node.js and Express.js, 
- a frontend built on React Vite.


## Features

- Create English grammar test and provide the Rank
- Get 10 random grammar questions from the server
- Evaluate the rank based on the score achieved

#### Backend

is built on NodeJs and ExpressJs
it provides two end points:

- ranks
- words

#### Frontend

is built on React Vite
it provide several pages:

- page for the english quiz interface
- page for the rank interface
- error page
- intro page

## Technologies Used

- React vite
- NodeJs
- Express
- axios for API request

## Installation

English test app requires [Node.js](https://nodejs.org/) + to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
```

```sh
npm start

```

The app will be available at http://localhost:443/.

start the frontend server by

```sh
npm run dev
```

## using and testing

- after running the web browser will direct to intro page to get the test page click on go to the test
- after opening test page get request is sent to backend to get the words
- the test is multiple choice after select the answer you will be informed whether the answer correct or wong
- by answering each question post request is sent with the answer and the response include whether answer correct or wrong
- after answering the 10 question the rank page will be shown up directly and post request is sent with the score and the response contains the Rank
- the try to route to any url not handled in routes will redirect to error page
