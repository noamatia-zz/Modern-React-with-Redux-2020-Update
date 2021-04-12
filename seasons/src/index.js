import React from "react";
import ReactDOM from "react-dom";
import SeasonDispaly from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    const error = this.state.errorMessage;
    const latitude = this.state.lat;

    if (error && !latitude) {
      return <div>Error: {error}</div>;
    } else if (!error && latitude) {
      return <SeasonDispaly lat={latitude} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
