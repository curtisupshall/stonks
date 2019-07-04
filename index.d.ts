import * as React from 'react'

export interface StonkProps extends React.Props<Stonk> {
    data: number[];
    className?: string;
    granularity?: number;
    height?: number;
    isPositive?: boolean;
    width?: number;
}

export default class Stonk extends React.Component<StonkProps, any> {
    render(): JSX.Element;
}
