import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TinyPlot from './Tinyplot'

ReactDOM.render (
	<TinyPlot data={[50, 70, 90, 20, 100]}/>,
	document.getElementById('app-root')
)