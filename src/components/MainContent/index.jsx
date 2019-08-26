
import React from 'react'
import './styles.css'
import ResultTable from '../ResultTable'
import ResultGraph from '../ResultGraph'


/**
 *
 */
export default class MainContent extends React.Component {
    render () {
        return (
            <div className="mainContainer">
                <div>
                    <div>
                        <ResultTable/>
                    </div>
                    <div>
                    </div>
                    <div>
                        <ResultTable/>
                    </div>
                </div>
                <div>
                    <div>ЛЯВА СТРАНА</div>
                    <div>
                    </div>
                    <div>ДЯСНА СТРАНА</div>
                </div>
                <div>
                    <div>
                        <ResultGraph/>
                    </div>
                    <div>
                    </div>
                    <div>
                        <ResultGraph/>
                    </div>
                </div>
            </div>            
        )
    }
}
