import { Link } from "react-router-dom";
import Image from "../assets/mask.png";

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "#8497F9",
  flexWrap: "wrap",
  width: "95%",
  height: "auto",
  margin: "20px",
};
const Intro = () => {
  return (
    <>
      <div style={container} className="rounded-lg">
        <div style={{}}>
          <h1 style={{ fontFamily: "cursive", fontSize: "2em" }}>
            Let us test Your English Skills
          </h1>
          <h2>
            <Link to="/test">Go to The Test</Link>{" "}
          </h2>
        </div>
        <div>
          <img src={Image} width="400px" height="400px" />
        </div>
      </div>
    </>
  );
};

export default Intro;
