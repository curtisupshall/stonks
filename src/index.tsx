import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Stonk from './Stonk'

ReactDOM.render (
    <div>
        <Stonk
            data={[70, 67,50, 100, 90, 70, 80, 65, 95, 80, 90, 72, 90, 80, 89, 70, 86]}
            granularity={22}
            width={155}
            height={30}
            />
        <Stonk
            data={[70, 67,50, 100, 90, 70, 80, 65, 95, 80, 90, 72, 90, 80, 89, 70, 86]}
            granularity={16}
            />
        <Stonk
            data={[70, 67,50, 100, 90, 70, 80, 65, 95, 80, 90, 72, 90, 80, 89, 70, 86]}
            granularity={12}
            />
        <Stonk
            data={[70, 67,50, 100, 90, 70, 80, 65, 95, 80, 90, 72, 90, 80, 89, 70, 86]}
            granularity={8}
        />
        <Stonk
            data={[95, 90, 72, 90, 80, 89, 70, 86, 70, 67,50, 100, 90, 70, 80, 65, 52]}
            granularity={16}
            />
    </div>,
	document.getElementById('app-root')
)