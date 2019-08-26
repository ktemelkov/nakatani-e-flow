import React, { Component } from 'react'
import { Icon, Sidebar as SemanticSidebar } from 'semantic-ui-react'
import './styles.css'


/**
 *
 */
export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    
    render () {
        const { open } = this.state

        return (
            <>
                <SemanticSidebar visible={open} animation='overlay'>
                    <Icon name='sidebar' size='large' link onClick={ () => this.setState({ open: !open }) }/>
                </SemanticSidebar>
                <div className="sidebar" >
                    <Icon name='sidebar' size='large' link onClick={ () => this.setState({ open: !open }) }/>
                </div>
            </>
        )
    }
}
