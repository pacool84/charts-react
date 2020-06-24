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
            data: [550, 460, 670, 401, 2800],
          },
          {
            label: "Llamadas Atendidas",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: [1800, 1500, 1333, 1678, 1400],
          },
        ],
      },
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 500, 800);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133,122,144,0.5)");
    return gradient;
  };
  getChartData = (canvas) => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["rgba(255,0,255,0.75)", "rgba(0,255,0,0.75)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };
  render() {
    return (
      <div className="Chart-container">
        <h1>Trending Calls</h1>
        <Line
          options={{
            responsive: true,
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}

export default App;
