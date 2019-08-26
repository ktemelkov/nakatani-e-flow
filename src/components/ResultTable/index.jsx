
import React from 'react'
import './styles.css'


/**
 *
 */
export default class ResultTable extends React.Component {
    render () {
        const data = [
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
            ['H1', 'H6', 'F6', 'F1', 'H3', 'H4', 'F4', 'F3', 'H2', 'H5', 'F5', 'F2'],
            ['P9', 'Gl5', 'E42', 'RP3', 'C7', 'IG5', 'V65', 'R3', 'MC7', 'TR4', 'VB40', 'F3'],
            ['0', '', '', '', '', '', '', '', '', '', '', ''],
            ['1', '', '', '', '', '', '', '', '', '', '', ''],
            ['2', '', '', '', '', '', '', '', '', '', '', ''],
            ['3', '', '', '', '', '', '', '', '', '', '', ''],
            ['4', '', '', '', '', '', '', '', '', '', '', ''],
            ['5', '', '', '', '', '', '', '', '', '', '', ''],
            ['6', '', '', '', '', '', '', '', '', '', '', ''],
            ['7', '', '', '', '', '', '', '', '', '', '', '']
        ]

        return (
            <div className="resultTable">
                {
                    data.map((v, idx) => (
                    <div key={v[0]}>
                        {
                            v.map((vv, idx) => (<div key={idx}><div>{vv}</div></div>))
                        }
                    </div>))
                }
            </div>
        )
    }
}
