
import React from 'react'
import './styles.css'

const remote = window.require('electron').remote


/**
 *
 */
export default class AppHeader extends React.Component {

    /**
     *
     * @param {*} props
     */
    constructor(props) {
        super(props)
        this.state = { hover: -1 }
        this.onAppMinimize = this.onAppMinimize.bind(this)
        this.onAppMaximize = this.onAppMaximize.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }


    /**
     * 
     * @param {*} appBtnIdx
     */
    onMouseEnter(appBtnIdx) {
        if (appBtnIdx != this.state.hover) {
            this.setState({ hover: appBtnIdx })
        }
    }


    /**
     * 
     * @param {*} appBtnIdx
     */
    onMouseLeave(appBtnIdx) {
        this.setState({ hover: -1 })
    }


    /**
     *
     */
    onAppClose() {
        const window = remote.getCurrentWindow()
        window.close()
    }


    /**
     *
     */
    onAppMaximize() {
        this.setState({ hover: -1 })
        const window = remote.getCurrentWindow()

        if (!window.isMaximized()) {
            window.maximize()
        } else {
            window.unmaximize()
        }
    }


    /**
     *
     */
    onAppMinimize() {
        this.setState({ hover: -1 })

       const window = remote.getCurrentWindow()
       window.minimize()
    }


    /**
     *
     */
    renderIcon(idx, clickHandler, icon, bg = 'appControlBg') {
        const hoverIdx = this.state.hover
        const bgStyles = [ 'appControl' ]
        const iconStyles = [ 'appControlMask', icon ]

        if (hoverIdx == idx) {
            bgStyles.push(bg)
            iconStyles.push('appControlHover')
        }

        return (
            <div className={bgStyles.join(' ')}
                    onMouseMove={() => this.onMouseEnter(idx)}
                    onMouseLeave={() => this.onMouseLeave(idx)}>
                <div className={iconStyles.join(' ')} 
                    onClick={clickHandler}/>
            </div>
        )
    }


    /**
     *
     */
    render () {
        return (            
            <div className="appWindowControls">
                { this.renderIcon(0, this.onAppClose, 'appControlClose', 'appControlBg2') }
                { this.renderIcon(1, this.onAppMaximize, 'appControlMaximize') }
                { this.renderIcon(2, this.onAppMinimize, 'appControlMinimize') }
            </div>
        )
    }
}
