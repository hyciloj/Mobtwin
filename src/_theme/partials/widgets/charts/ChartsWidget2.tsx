/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

type Props = {
  className: string
}

const ChartsWidget2: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions(456))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef])

  return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Recent Transactions</span>

            <span className='text-muted fw-bold fs-7'>More than 1000 new records</span>
          </h3>

          {/* begin::Toolbar */}
          <div className='card-toolbar' data-kt-buttons='true'>
            <a
                className='btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1'
                id='kt_charts_widget_3_year_btn'
            >
              Year
            </a>

            <a
                className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1'
                id='kt_charts_widget_3_month_btn'
            >
              Month
            </a>

            <a
                className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'
                id='kt_charts_widget_3_week_btn'
            >
              Week
            </a>
          </div>
          {/* end::Toolbar */}
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body'>
          {/* begin::Chart */}
          <div ref={chartRef} id='kt_charts_widget_3_chart' style={{height: '350px'}}></div>
          {/* end::Chart */}
        </div>
        {/* end::Body */}
      </div>
  )
}

export {ChartsWidget2}

function getChartOptions(height: number): ApexOptions {
  const labelColor = "#4e4e4e"
  const borderColor = "#848484"
  const baseColor = "#102cc1"
  const secondaryColor = "#686868"
  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 40, 40, 90, 90, 70, 70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: ["#f1faff"],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  }
}
