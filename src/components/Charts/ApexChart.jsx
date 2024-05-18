import React, { Component } from "react";
import Chart from "react-apexcharts";
import Grid from '@mui/material/Grid';

// Debounce function implementation
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

class ApexChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#f4f4f440",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: props.categories || [
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
        colors: ['#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#6A5ACD', '#ffc8c8'],
      },
      series: [
        {
          name: "You",
          data: props.data && props.data.every(num => typeof num === 'number') 
            ? props.data 
            : [0, 0, 0, 0, 0],
        },
      ],
      pieOptions: {
        chart: {
          background: "#f4f4f440",
          toolbar: {
            show: false,
          },
        },
        labels: props.categories || [
          "Neuroticism",
          "Extraversion",
          "Openness",
          "Agreeableness",
          "Conscientiousness",
        ],
        colors: ['#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#6A5ACD', '#ffc8c8'],
      },
      pieSeries: props.data && props.data.every(num => typeof num === 'number') 
        ? props.data 
        : [0, 0, 0, 0, 0],
      radarOptions: {
        chart: {
          background: "#f4f4f440",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: props.categories || [
            "Neuroticism",
            "Extraversion",
            "Openness to Experience",
            "Agreeableness",
            "Conscientiousness",
          ],
        },
        colors: ['#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#6A5ACD', '#ffc8c8'],
      },
      radarSeries: [
        {
          name: "You",
          data: props.data && props.data.every(num => typeof num === 'number') 
            ? props.data 
            : [0, 0, 0, 0, 0],
        },
      ],
      screenWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedHandleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  };

  debouncedHandleResize = debounce(this.handleResize, 300);

  render() {
    const { screenWidth } = this.state;
    const { forceLargeScreen } = this.props;
    const isSmallScreen = screenWidth <= 1023 && !forceLargeScreen;

    return (
      <div className="ApexChart" id="chart" style={{ width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={400}
              />
            </div>
          </Grid>
          <Grid item xs={12} style={{ height: "50px" }}></Grid>
          {isSmallScreen ? (
            <>
              <Grid item xs={12}>
                <div className="mixed-chart">
                  <Chart
                    options={this.state.pieOptions}
                    series={this.state.pieSeries}
                    type="pie"
                    height={400}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="mixed-chart">
                  <Chart
                    options={this.state.radarOptions}
                    series={this.state.radarSeries}
                    type="radar"
                    height={400}
                  />
                </div>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={6}>
                <div className="mixed-chart">
                  <Chart
                    options={this.state.pieOptions}
                    series={this.state.pieSeries}
                    type="pie"
                    height={400}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mixed-chart">
                  <Chart
                    options={this.state.radarOptions}
                    series={this.state.radarSeries}
                    type="radar"
                    height={400}
                  />
                </div>
              </Grid>
            </>
          )}
        </Grid>
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
  forceLargeScreen: false,
};

export default ApexChart;
