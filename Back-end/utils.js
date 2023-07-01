const filterFunction = (arr = [], filterItem) => arr.filter(word => word.pos === filterItem);



const selectedPos=(arr,pos)=>{
    arr.push(pos[Math.floor(Math.random() * pos.length)])
}

class AppError extends Error {
    constructor(message, statusCode, errors) {
      super(message);
      this.statusCode = statusCode;
      this.errors = errors;
    }
  }
  
  module.exports = AppError;
  

module.exports = { filterFunction,selectedPos,AppError}