import * as React from 'react'

const normalizeData = (data: number[], granularity: number): number[] => {
    if (data.length <= granularity) {
        return data
    } else {
        return data // Here we should normalize the data
    }
}

interface IProps {
    data: number[]
    granularity?: number
    isPositive?: boolean
    width?: number
    height?: number
}

export default class Tinyplot extends React.Component<IProps> {
    render() {
        const granularity: number = this.props.granularity || 20
        const data: number[] = normalizeData(this.props.data, granularity)
        const isPositive: boolean = this.props.isPositive || data[0] <= data[data.length - 1]
        const width: number = this.props.width || 200
        const height: number = this.props.height || 100
        const unitWidth: number = width / granularity
        const scale: number = 1 / Math.max(...data)

        let plotX: number = width - unitWidth * data.length
        let dataString: string = 'M' + plotX + ',100 '

        for (let i = 0; i < data.length; i ++) {
            dataString += `${plotX},${100 * (1 - (data[i] * scale))} `
            plotX += unitWidth
        }

        return (
            <div className='tinyplot'>
                <svg preserveAspectRatio='none' width={200} height={100} viewBox={`0 0 ${width} ${height}`}>
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