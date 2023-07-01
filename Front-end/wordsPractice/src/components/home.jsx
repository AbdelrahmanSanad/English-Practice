import PropTypes from "prop-types";
import { Spin } from "antd";
import Test from "./test";
import Failure from "./failure";
import useFetch from "../hooks/useFetch";

const HomePage = ({ scoreHandling }) => {
  ////using Custom hook to get the data
  const { data, error, isLoading } = useFetch(`http://localhost:443/words`);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {!!data && !!Object.keys(data).length && !!data.test?.length && (
            <Test scoreHandling={scoreHandling} testData={data.test} />
          )}
          {!!error && <Failure />}
        </>
      )}
    </>
  );
};

HomePage.propTypes = {
  scoreHandling: PropTypes.func.isRequired,
};

export default HomePage;
