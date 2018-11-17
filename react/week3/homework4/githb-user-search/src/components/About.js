import React from "react";
import Navigation from "./Navigation";

class About extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-6 mt-5 pr-2">
              <h1>Hello! My name is Neer</h1>
              <p>
                I am in the process of becoming front-end developer. I enjoy
                being in Hack your future and Rails Girls community. Besides
                coding I love to listen rock music, lift weights and enjoy
                eating Hot chillies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
