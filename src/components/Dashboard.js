import React from 'react'
import { reduxConnect } from 'services/redux/mapping'
import BaseComponent from 'components/BaseComponent'

class Dashboard extends BaseComponent {

    render() {
        return (
            <div>
                <button onClick={this.onLogout} >Dashboard Logout</button>
            </div>
        )
    }
}

export default reduxConnect(Dashboard)