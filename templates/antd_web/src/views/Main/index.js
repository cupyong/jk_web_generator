import React, { PropTypes } from 'react'
import Left from '../../components/Main/Left.js'
import Top from '../../components/Main/Top.js'
import cookies from 'react-cookies'
import { browserHistory } from 'react-router'
class Main extends React.Component {
    constructor() {
        super()
    }
    componentWillMount() {
        let token = cookies.load('ad_token')
        if (!token) {
            browserHistory.push("Login")
        }
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                <Left pathname={this.props.location.pathname} />
                <div className="right_box">
                    <Top pathname={this.props.location.pathname} />
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
// const contextTypes = {
//     router: PropTypes.object.isRequired,
//     store: PropTypes.object.isRequired
// };

// Main.contextTypes = contextTypes;
export default Main