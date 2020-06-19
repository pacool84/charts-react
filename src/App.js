import React from "react";
import { Line } from "react-chartjs-2";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Llamadas perdidas",
            backgroundColor: "rgba(255,0,255,0.75)",
            data: [100, 150, 90, 77],
          },
          {
            label: "Subscriptions",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: [110, 160, 90, 87],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="Chart-container">
        <h1>Hello my friend APP</h1>
        <Line
          options={{
            responsive: true,
          }}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
