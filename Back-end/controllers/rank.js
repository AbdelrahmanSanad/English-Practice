const fs=require('fs');
const AppError = require('../utils');
const dataPath = `/../data/TestData.json`;

//Reading The Data From The Json File
const data = JSON.parse(fs.readFileSync(`${__dirname}${dataPath}`, "utf-8"));


//Get Rank Method
const getRank=(req, res,next) => {

    // get the Final Score from the front end Request
    const { body: { finalScore = 0 } } = req;
    if(!finalScore) return(next(new AppError('No final score Idetified',404)));

    //get the ScoreList from the Json File Data
    const { scoresList = [] } = data;
    if(!scoresList) return(next(new AppError('No Data Found',505)))
    //get the length of score list Array
    const scoreHistoryCount = scoresList.length;

    // getting the Number of scores that beneath the Final Score 
    const testScoreArea = scoresList.filter(el => +el < finalScore).length;

    // Get the rank by Rounded it to neares hundredth
    const testRank = Math.round((testScoreArea * 100) / scoreHistoryCount);

    res.status(200).json({

            rank: testRank
    });

}


module.exports={getRank}