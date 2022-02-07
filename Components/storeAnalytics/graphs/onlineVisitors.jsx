import React, { Component } from 'react'
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

class OnlineVisitors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {process.browser && (
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default OnlineVisitors
