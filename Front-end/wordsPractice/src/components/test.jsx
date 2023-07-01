import axios from "axios";
import { Progress, Button, Space } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Test = ({ testData, scoreHandling }) => {
  const style = {
    color: "#000A62",
    borderWidth: "5px",
    padding: "20px",
    backgroundColor: "#7dbcea",
    margin: "20px",
  };
  //use State Hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [score, setScore] = useState(0);
  const [, setAnswer] = useState("");

  const navigate = useNavigate();

  //Handling The Next Button
  const nextHandling = () => {
    if (currentIndex < testData.length - 1) {
      setResult(false);
      setCurrentIndex(currentIndex + 1);
      setDisabled(false);
      setCurrentPercent((currentIndex + 1) * 10);
    } else {
      setCurrentPercent(100);
    }
  };

  //Handling The Answer Submit
  const submitAnswer = (e) => {
    setDisabled(true);
    axios
      .post("http://localhost:443/words", {
        answer: e,
        id: testData[currentIndex].id,
      })
      .then(({ data }) => {
        setAnswer(data.answer);
        if (data.answer === "correct") {
          setScore(score + 10);
          setResult(true);
        }
      });
  };

  //Navigate When The last Question Is Answered
  useEffect(() => {
    if (currentPercent === 100) {
      scoreHandling(score);
      navigate("/rank");
    }
  }, [currentPercent, navigate, score, scoreHandling]);

  return (
    <>
      <div style={style} className="rounded-lg">
        <div>
          what is The Kind of The word
          <p className="font-bold text-xl	" style={style}>
            {currentPercent !== 100 && testData[currentIndex].word}
          </p>
        </div>
        <div>
          <Space wrap>
            <Button
              style={buttonStyle}
              disabled={!disabled}
              onClick={nextHandling}
              type="primary"
            >
              Next
            </Button>
          </Space>
          <button
            style={buttonStyle}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            value="noun"
            onClick={() => submitAnswer("noun")}
            disabled={disabled}
          >
            Noun
          </button>
          <button
            style={buttonStyle}
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            value="verb"
            onClick={() => submitAnswer("verb")}
            disabled={disabled}
          >
            verb
          </button>
          <button
            style={buttonStyle}
            type="button"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            value="adjective"
            onClick={() => submitAnswer("adjective")}
            disabled={disabled}
          >
            adjective
          </button>
          <button
            style={buttonStyle}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            value="adverb"
            onClick={() => submitAnswer("adverb")}
            disabled={disabled}
          >
            adverb
          </button>
        </div>

        {disabled && currentPercent != 100 && (
          <div style={{ padding: "2px" }}>
            <div>
              {result ? (
                <span style={{ color: "Green" }}> Correct</span>
              ) : (
                <span style={{ color: "red" }}> Wrong</span>
              )}
            </div>
          </div>
        )}

        <div>
          <Progress percent={currentPercent} />
        </div>
      </div>
    </>
  );
};

Test.propTypes = {
  testData: PropTypes.any.isRequired,
  scoreHandling: PropTypes.any.isRequired,
};

const buttonStyle = {
  margin: "1vh",
  border: "none",
};
export default Test;
