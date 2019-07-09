import * as React from 'react'
import { NONAME } from 'dns';

const normalizeData = (data: number[], granularity: number): number[] => {
    console.log('date in:', data)
    if (data.length <= granularity) {
        return data
    } else {
        const scale:number  = granularity / data.length
        let normalizedData:number [] = []
        for (let i = 0; i < granularity; i ++) {
            normalizedData.push(data[Math.ceil(i * scale)])
        }
        console.log('data out:', normalizedData)
        return normalizedData
    }
}

interface StonkProps {
    data: number[]
    className?: string
    children?: any
    floor?: number
    granularity?: number
    height?: number
    isPositive?: boolean
    showBaseline?: boolean
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
        const minValue: number = Math.min(...data)
        const buffer: number = minValue < 0 ? Math.abs(minValue) : 0
        const scale: number = 1 / (Math.max(...data) + buffer)   
        const baseline: number = Math.ceil((100 - this.props.floor) * (1 - (buffer * scale)))
        const showBaseline: boolean = this.props.showBaseline === false ? false : this.props.showBaseline || baseline > 0
        console.log('scale:', scale)

        console.log('showBaseline: ', showBaseline)
        let x: number = Math.ceil(width - unitWidth * (data.length - 1))
        let plotString: string = x === 0 ? 'M' : `M0,${baseline} ${x - unitWidth},${baseline}`

        for (let i = 0; i < data.length; i ++) {
            let y = Math.ceil((100 - (this.props.floor * scale * 100)) * (1 - (data[i] + buffer) * scale))
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
                        {this.props.children || (
                            <>
                                <linearGradient id='positive-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                                    <stop style={{stopColor: '#66BB6A', stopOpacity: 0.68}} offset='0%' />
                                    <stop style={{stopColor: '#A5D6A7', stopOpacity: 0.24}} offset='50%' />
                                </linearGradient>
                                <linearGradient id='negative-gradient' x1='0%' x2='0%' y1='0%' y2='100%'>
                                    <stop style={{stopColor: '#ef5350', stopOpacity: 0.68}} offset='0%' />
                                    <stop style={{stopColor: '#ef9a9a', stopOpacity: 0.24}} offset='50%' />
                                </linearGradient>
                                <linearGradient id='positive-line' x1='0%' x2='0%' y1='0%' y2='100%'>
                                    <stop style={{stopColor: '#4CAF50'}} offset='0%' />
                                </linearGradient>
                                <linearGradient id='negative-line' x1='0%' x2='0%' y1='0%' y2='100%'>
                                    <stop style={{stopColor: '#f44336'}} offset='0%' />
                                </linearGradient>
                            </>
                        )}
                    </defs>
                    <path
                        d={`${plotString} ${width},100 0,100`}
                        style={{fill: `url('#${isPositive ? 'positive-gradient' : 'negative-gradient'}')`}}
                    />
                    {true && (
                        <path
                            d={`M 0,${baseline} ${width},${baseline}`}
                            style={{
                                strokeWidth: 2,
                                fill: 'none',
                                stroke: '#888',
                                vectorEffect: 'non-scaling-stroke'
                            }}
                        />
                    )}
                    <path
                        d={plotString}
                        style={{
                            strokeWidth: 2,
                            fill: 'none',
                            stroke: `url('#${isPositive ? 'positive' : 'negative'}-line')`,
                            vectorEffect: 'non-scaling-stroke'
                        }}
                    />
                </svg>
            </div>
        )
    }
}
