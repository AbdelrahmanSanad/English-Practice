//get function from utils
const fs = require("fs");
const { filterFunction, selectedPos, AppError } = require("../utils");
const dataPath = `/../data/TestData.json`;

//Reading The Data From The Json File
const data = JSON.parse(fs.readFileSync(`${__dirname}${dataPath}`, "utf-8"));

//Get TestWords Method
const getTestWords = (req, res, next) => {
  //get the WordList Data
  const { wordList = [] } = data;
  if (!wordList) return next(new AppError("The Word list Not found", 500));

  //Creating New Array to get the data required to send in it
  const testWords = [];

  //Creating Array for each POS propety
  const adjectives = filterFunction(wordList, "adjective");
  const adverbs = filterFunction(wordList, "adverb");
  const nouns = filterFunction(wordList, "noun");
  const verbs = filterFunction(wordList, "verb");

  // push 1verb,1noun,1adver and 1adjective in the testWords Array
  selectedPos(testWords, adjectives);
  selectedPos(testWords, adverbs);
  selectedPos(testWords, nouns);
  selectedPos(testWords, verbs);

  //adding the rest items in array to complete the 10 items and assuring that each item won't be repeated
  do {
    const randomWord =
      wordList[Math.floor(Math.random() * (wordList.length - 1))];

    if (!testWords.map((word) => word.id).includes(randomWord.id)) {
      testWords.push(randomWord);
    }
  } while (testWords.length < 10);
  //Deleting The Pos property
  const newTestWords = testWords.map(({ word, id }) => ({ id, word }));

  //Send the data
  res.status(200).json({ test: newTestWords });
};

////get The pos of The word
const getTheAnswer = (req, res, next) => {
  const {
    body: { id, answer },
  } = req;
  if (!id || !answer)
    return next(new AppError("Please Provide valide Id and Answer", 404));

  const { wordList = [] } = data;
  if (!wordList.length)
    return next(new AppError("The Word list Not found", 500));

  //get the Object from the data
  const dataWordObj = wordList.find((word) => word.id === id);
  if (!dataWordObj)
    next(new AppError("The id provided has no related word", 404));

  // Check The Answer
  if (dataWordObj.id === id && dataWordObj.pos === answer) {
    res.status(200).json({ answer: "correct" });
  } else {
    res.status(200).json({ answer: "wrong" });
  }
};

module.exports = { getTestWords, getTheAnswer };
