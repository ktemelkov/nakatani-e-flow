import React from 'react'

import MainContent from './components/MainContent'
import AppHeader from './components/AppHeader'
import PatientInfo from './components/PatientInfo'
import Sidebar from './components/Sidebar'


/**
 *
 */
export default class App extends React.Component {

    render() {
        return [
            <MainContent/>,
            <PatientInfo/>,
            <AppHeader/>,
            <Sidebar/>
        ]
    }
}

