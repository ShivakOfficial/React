import React, { Component } from "react";
import Chart from "react-apexcharts";


class BarChartInReactJs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [80, 40, 45, 90, 99, 80, 66, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="app "
        style={{
          width: "70%",
          height:"40%",
          backgroundColor:"white"
        }}
      >
        <h4
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            paddingTop: "12px",
          }}
        >
          Overview
        </h4>
        <p>Monthly Earning</p>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"

            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChartInReactJs;
