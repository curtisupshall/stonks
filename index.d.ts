import * as React from 'react'

export interface StonkProps extends React.Props<Stonk> {
    data: number[];
    className?: string;
    granularity?: number;
    height?: number;
    isPositive?: boolean;
    width?: number;
}

declare class Stonk extends React.Component<StonkProps> {

}

declare module 'stonks' {

}

export default Stonk
