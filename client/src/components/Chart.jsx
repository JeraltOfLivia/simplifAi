//also had to import chart.js module into node modules as a dependency for this to work
import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import ReactDOM from 'react-dom';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }

  componentDidMount() {
    this.getChartData(this.props.data);
  }

  componentDidUpdate() {
    console.log(this.state.chartData.datasets[0].data);
  }

  getChartData(data) {
    console.log(data);
    const colorPalette = ['#f9dfe5', '#d6ebfb', '#fcebd8', '#d7f2f2', '#fef5dc', '#eadefe', '#f4f5f5'];
    const colorBorders = ['#ea5e82', '#3da2ec', '#f29e3d', '#5ac1c0', '#f9cc54', '#9965fd', '#c9cbcf'];
    var labels = data.shift();
    var colors = [];
    var colorBords = [];
    for(let i = 0, j = 0; i < labels.length; i++, j++) {
      colors.push(colorPalette[j]);
      if(j === colorPalette.length - 1) {
        j = -1;
      }
    }
    for (let i = 0; i < labels.length; i++) {
      colorBords.push(colorBorders[i]);
    }
    data.forEach((row, indexR) => {
      row.forEach((element, indexE) => {
        data[indexR][indexE] = element/1;
      });
    });

    console.log(data);
    this.setState({
      chartData: {
        labels: labels,
        datasets: [{
          label: "To turn on labels for legend, turn on line 62.",
          backgroundColor: colors,
          borderWidth: 0.5,
          borderColor: colorBords,
          data: data[0],
        }]
      }
    });
  }

  render() {


    return (
      <div>
       <div style={{'width': '800px', 'margin': '2% auto 2% auto'}}>
        <Line
          data={this.state.chartData}
          width={50}
          height={20}
          options={{
            title: {
              display: true,
              text: "Results",
              fontSize: 25
            },
            legend: {
              display: false,
              position: 'right'
            }
          }}
        />
        </div>
      </div>
    )
  }
}

export default Chart;

// ReactDOM.render(
//   <Chart name="nameProp" />,
//   document.getElementById('app')
// );