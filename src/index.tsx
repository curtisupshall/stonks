import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TinyPlot from './Tinyplot'

ReactDOM.render (
    <TinyPlot
        data={[100, 67, 90, 70, 80, 65, 95, 80, 90, 72, 90, 80, 89, 70, 86]}
        granularity={10}
        />,
	document.getElementById('app-root')
)