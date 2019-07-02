import * as React from 'react'

interface IProps {
    data: number[]
    granularity?: number
    width?: number
    height?: number
}

export default class Tinyplot extends React.Component<IProps> {
    render() {
        const { data } = this.props
        const minValue: number = Math.max(...data)
        const maxValue: number = Math.min(...data)
        const isPositive: boolean = data[0] <= data[data.length - 1]
        const width = this.props.width || 160
        const height = this.props.height || 80
        const granularity = this.props.granularity || 10

        return (
            <div className='tinyplot'>
                <svg preserveAspectRatio='none'>
                    <defs>
                        <linearGradient id='positive-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                            <stop style={{stopColor: '#66BB6A', stopOpacity: 0.68}} offset='0%' />
                            <stop style={{stopColor: '#A5D6A7', stopOpacity: 0.24}} offset='50%' />
                        </linearGradient>
                        <linearGradient id='negative-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                            <stop style={{stopColor: '#ef5350', stopOpacity: 0.68}} offset='0%' />
                            <stop style={{stopColor: '#ef9a9a', stopOpacity: 0.24}} offset='50%' />
                        </linearGradient>
                    </defs>
                    <path
                        d='M 50, 5 60,20 70,40 80,20 90,25 100,60'
                        style={{strokeWidth: 2, fill: 'none', stroke: isPositive ? '#4CAF50' : '#f44336'}}
                    />
                    <path
                        d='M 50, 100 50, 5 60,20 70,40 80,20 90,25 100,60 100,100 0,100'
                        style={{fill: `url('#${isPositive ? 'positive-gradient' : 'negative-gradient'}')`}}
                    />
                </svg>
            </div>
        )
    }
}