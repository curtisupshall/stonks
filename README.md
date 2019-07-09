# stonks

Small form-factor line chart for [React](https://github.com/facebook/react).

![Screenshot](https://user-images.githubusercontent.com/18599267/60911625-75d0d780-a238-11e9-83d3-80333677301a.png)

## Installation

```bash
npm install stonks
```

> Note: If using Typescript, `npm install @types/stonks`

## Basic Usage

```javascript
import * as React from 'react';
import Stonk from 'stonks';

const StonksDemo = () => {
    const data = [50, 35, 20, 21, 36, 51, 55, 61, 70, 60, 55, 60];
    return (
        <div>
            <Stonk data={data} />
        </div>
    );
}
```

## Demo

To try out the component in a demo:

```bash
git clone git@github.com:curtisupshall/stonks.git
cd stonks
npm install
npm run demo-server
```

Then visit `localhost:8080` in your browser.

## Theming

The theme for each graph can be customized. Children passed to a `<Stonk>` instance will be passed to the SVG's `<defs>` element. The following `<linearGradient>` IDs are used:

|id|Description|
|--|-----------|
|`positive-gradient`|The background gradient for positive graphs
|`negative-gradient`|The background gradient for negative graphs
|`positive-line`|The stroke line gradient for positive graphs
|`negative-line`|The stroke line gradient for negative graphs
|`baseline`|The stroke line gradient for the graph's baseline

## Props

|Name|Type|Default|Description
|----|----|-------|-----------
|`data`|`number[]`|- |The data for the line plot
|`className`|`string`|`'stonk'`|Optional `className` attribute
|`granularity`|`number`|`10`|The number of plots on the graph
|`height`|`number`|`100`|The height of the graph (pixels)
|`isPositive`|`boolean`|-|Overrides the styling for whether the net change of the graph is positive or negative
|`showBaseline`|`boolean`|-|Override whether or not the zero line is visible. By default, the line isn't shown unless the `data` prop contains negative values
|`width`|`number`|`200`|The width of the graph (pixels)

>Note: In the case when granularity is smaller than the data points provided, a select number of plots are shown. In the case that granularity is larger than the data provided, the graph is pushed to the right.
