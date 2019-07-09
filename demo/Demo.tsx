import * as React from 'react'

import Stonk from '../src/Stonk'

class Demo extends React.Component {
    render() {
        const data = [50, 60, 50, 45, 20, -10, 24, 76, 43, 50, 70, 40, 20, -20, -24]
        const data2 = [50, 40, 60, 35, 95, 90]
        const granularity = 16
        const theme = (
            <>
                <linearGradient id='positive-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                    <stop style={{stopColor: '#66BB6A', stopOpacity: 0.68}} offset='0%' />
                    <stop style={{stopColor: '#A5D6A7', stopOpacity: 0.24}} offset='50%' />
                </linearGradient>
                <linearGradient id='negative-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                    <stop style={{stopColor: '#ef5350', stopOpacity: 0.68}} offset='0%' />
                    <stop style={{stopColor: '#ef9a9a', stopOpacity: 0.24}} offset='50%' />
                </linearGradient>
                <linearGradient id='positive-line' gradientUnits='userSpaceOnUse'>
                    <stop style={{stopColor: '#4CAF50'}} offset='0%' />
                </linearGradient>
                <linearGradient id='negative-line' gradientUnits='userSpaceOnUse'>
                    <stop style={{stopColor: '#f44336'}} offset='0%' />
                </linearGradient>
                <linearGradient id='baseline' gradientUnits='userSpaceOnUse'>
                    <stop style={{stopColor: '#AAA', stopOpacity: 0.86}} offset='0%' />
                </linearGradient>
            </>
        )
        return (
            <div>
                <Stonk data={data} granularity={granularity} />
                <Stonk data={data2} granularity={granularity} />
            </div>
        )
    }
}

export default Demo
