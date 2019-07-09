import * as React from 'react'

import Stonk from '../src/Stonk'

class Demo extends React.Component {
    render() {
        const data = [50, 60, 12, 0, 50, 300, 43, 50, 70, 40]
        const granularity = 12
        return (
            <div>
                <Stonk
                    data={data}
                    granularity={granularity}
                />
            </div>
        )
    }
}

export default Demo
