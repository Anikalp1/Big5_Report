import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#f4f4f440",
        },
        xaxis: {
          categories:
            props.categories || [
              "Neuroticism",
              "Extraversion",
              "Openness to Experience",
              "Agreeableness",
              "Conscientiousness",
            ],
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
      },
      series: [
        {
          name: "You",
          data: props.data || [102, 70, 81, 73, 60],
        },
      ],
      pieOptions: {
        chart: {
          background: "#f4f4f440",
        },
        labels: ["Neuroticism", "Extraversion", "Openness", "Agreeableness", "Conscientiousness"],
      },
      pieSeries: [44, 55, 41, 17, 15],
      radarOptions: {
        chart: {
          background: "#f4f4f440",
        },
        xaxis: {
          categories: [
            "Neuroticism",
            "Extraversion",
            "Openness to Experience",
            "Agreeableness",
            "Conscientiousness",
          ],
        },
      },
      radarSeries: [
        {
          name: "You",
          data: [102, 70, 81, 73, 60],
        },
      ],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.categories !== prevState.options.xaxis.categories ||
      nextProps.data !== prevState.series[0].data
    ) {
      return {
        options: {
          ...prevState.options,
          xaxis: {
            categories: nextProps.categories || prevState.options.xaxis.categories,
          },
        },
        series: [
          {
            ...prevState.series[0],
            data: nextProps.data || prevState.series[0].data,
          },
        ],
      };
    }
    return null;
  }

  render() {
    return (
      <div className="ApexChart" id="chart" style={{ width: "100%", height: "900px" }}>
        <div className="row">
          <div className="mixed-chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={400} />
          </div>
        </div>
        <div style={{ height: "50px" }}></div> {/* Added space */}
        <div className="row">
          <div className="mixed-chart" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <Chart options={this.state.pieOptions} series={this.state.pieSeries} type="pie" height={400} />
            </div>
            <div style={{ flex: 1 }}>
              <Chart options={this.state.radarOptions} series={this.state.radarSeries} type="radar" height={400} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ApexChart.defaultProps = {
  categories: [
    "Neuroticism",
    "Extraversion",
    "Openness to Experience",
    "Agreeableness",
    "Conscientiousness",
  ],
  data: [102, 70, 81, 73, 60],
};

export default ApexChart;