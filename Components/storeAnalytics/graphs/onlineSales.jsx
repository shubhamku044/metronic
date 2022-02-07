import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class OnlineSales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'chart-line',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          show: true,
          curve: ['smooth', 'straight', 'stepline'],
          lineCap: 'butt',
          colors: '#000',
          width: 2,
          dashArray: 0,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 20, 39, 20, 10, 31],
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="200"
              curver="smooth"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default OnlineSales
