import React from "react";

const Loading = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8 text-center">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          >
            Loading
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
