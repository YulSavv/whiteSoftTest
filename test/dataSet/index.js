const fs = require('fs');


const dataFromFile = fs.readFileSync('data.json');
const data = JSON.parse(dataFromFile);

const resultFromFile = fs.readFileSync('result.json');
const result = JSON.parse(resultFromFile);

module.exports = {
    data,
    result,
}