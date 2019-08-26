
import React from 'react'
import echarts from 'echarts'


/**
 *
 */
export default class ResultGraph extends React.Component {
    constructor(props) {
        super(props)

        this.chartContainer = null
        this.chart = null

    }

    componentDidMount() {
        this.chart = echarts.init(this.chartContainer)
        const app = {};
        const option = {
            title: {
                show: false,
                textStyle: {
                    lineHeight: 0
                }
            },
            legend: {
                show: false,
                height: 0,
                width: 0
            },
            grid: {
                top: 0,
                left: 0,
                bottom: '40px',
                right: 0
            },
            xAxis: {
                type: 'category',
                data: ['P9', 'Gl5', 'E42', 'RP3', 'C7', 'IG5', 'V65', 'R3', 'MC7', 'TR4', 'VB40', 'F3'],
                nameGap: 0,
                min: 0,
                max: 11,
                splitNumber: 12,
                interval: 1,
                axisLabel: {
                    rotate: 90
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        opacity: 0.1
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100,
                interval: 10,
                nameGap: 0,
                axisLabel: {
                    inside: true,
                    interval: 50,
                    verticalAlign: 'bottom'
                },
                axisTick: {
                    inside: true,
                    interval: 50
                },
                splitLine: {
                    show: true,
                    interval: 50,
                    lineStyle: {
                        color: '#fff',
                        opacity: 0.1
                    }
                }
            },
            series: [{
                data: [82, 93, 90, 93, 10, 30, 32, '', '', '', '', ''],
                type: 'line'
            }]
        };

        if (option && typeof option === "object") {
            this.chart.setOption(option, true);
        }

        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.chart.resize()
    }

    render () {
        const style = {
            width: '100%',
            height: '100%',
            margin: '0',
            padding: '0'
        }
        return (
            <div ref={r => this.chartContainer = r} style={style}>
            </div>            
        )
    }
}
