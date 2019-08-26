
import React from 'react'
import './styles.css'


/**
 *
 */
export default class PatientInfo extends React.Component {
    render () {
        return (
            <div className="patientInfoContainer">
                <div>
                    <div>Калин Темелков</div>
                    <div>възраст · 41 години</div>
                </div>
                <div>
                    <div/>
                    <div>преглед · 2 Май 2018 г.</div>
                </div>
            </div>            
        )
    }
}
