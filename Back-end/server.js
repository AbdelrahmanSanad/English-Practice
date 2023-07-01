require('dotenv').config();

const app = require('./app');
const fs = require('fs');

const port = process.env.PORT;

const dataPath = `${__dirname}/data/TestData.json`;

if (!fs.existsSync(dataPath)) throw new Error(`Can't find data in path: ${dataPath}}`);

app.listen(port, () => {
    console.log(`This app is now listening on port ${port}`);
})