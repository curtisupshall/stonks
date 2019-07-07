# stonks

Small form-factor line chart for [React](https://github.com/facebook/react).

![Screenshot](https://user-images.githubusercontent.com/18599267/60739627-8707a480-9f17-11e9-8946-de8c0249b8ff.jpg)

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

## Props

|Name|Type|Default|Description
|----|----|-------|-----------
|`data`|`number[]`|- |The data for the line plot
|`className`|`string`|`'stonk'`|Optional `className` attribute
|`granularity`|`number`|`10`|The number of plots on the graph
|`height`|`number`|`100`|The height of the graph (pixels)
|`isPositive`|`boolean`|-|Overrides the styling for whether the net change of the graph is positive or negative
|`width`|`number`|`200`|The width of the graph (pixels)

>Note: In the case when granularity is smaller than the data points provided, a select number of plots are shown. In the case that granularity is larger than the data provided, the graph is pushed to the right.
