import * as React from 'react'

const normalizeData = (data: number[], granularity: number): number[] => {
    if (data.length <= granularity) {
        return data
    } else {
        const scale:number  = granularity / data.length
        let normalizedData:number [] = []
        for (let i = 0; i < granularity; i ++) {
            normalizedData.push(data[Math.ceil(i * scale)])
        }
        console.log('data out: ', normalizedData)
        return normalizedData
    }
}

interface StonkProps {
    data: number[]
    className?: string
    granularity?: number
    height?: number
    isPositive?: boolean
    width?: number
}

const DEFAULT_GRANULARITY = 20
const DEFAULT_HEIGHT = 100
const DEFAULT_WIDTH = 200

export default class Stonk extends React.Component<StonkProps> {
    render() {
        const granularity: number = this.props.granularity || DEFAULT_GRANULARITY
        const isPositive: boolean = this.props.isPositive === false ? false : this.props.data[0] <= this.props.data[this.props.data.length - 1]
        const data: number[] = normalizeData(this.props.data, granularity)
        const width: number = this.props.width || DEFAULT_WIDTH
        const height: number = this.props.height || DEFAULT_HEIGHT
        const unitWidth: number = width / (granularity - 1)
        const scale: number = 1 / Math.max(...data)

        let x: number = Math.ceil(width - unitWidth * (data.length - 1))
        let plotString: string = x === 0 ? 'M' : `M0,100 ${x - unitWidth},100`

        for (let i = 0; i < data.length; i ++) {
            let y = Math.ceil(100 * (1 - (data[i] * scale)))
            plotString = `${plotString} ${x},${y}`
            x += unitWidth            
        }

        return (
            <div
                className={this.props.className ? `stonk ${this.props.className}` : 'stonk'}
                style={{display: 'block'}}
            >
                <svg
                    preserveAspectRatio='none'
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} 100`}
                    style={{overflow: 'visible'}}
                >
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
                        d={plotString}
                        style={{
                            strokeWidth: 2,
                            fill: 'none',
                            stroke: isPositive ? '#4CAF50' : '#f44336',
                            vectorEffect: 'non-scaling-stroke'
                        }}
                    />
                    <path
                        d={`${plotString} ${width},100 0,100`}
                        style={{fill: `url('#${isPositive ? 'positive-gradient' : 'negative-gradient'}')`}}
                    />
                </svg>
            </div>
        )
    }
}
