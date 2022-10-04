import React from "react";
import Testflowrender from "./components";
import ReactFlowRenderer from "./components";

const App = () => {
  return (
    <div>
      <h1>This is react-flow-renderer testing</h1>

      {/* <Testflowrender
        color="red"
      /> */}
      <ReactFlowRenderer />
    </div>
  );
};

export default App;
