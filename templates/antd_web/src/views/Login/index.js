import React, { PropTypes } from 'react'
import '../../assets/css/style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { browserHistory } from 'react-router'
import cookie from 'react-cookies'
@connect(
    state => ({
        R_userLogin: state.R_userLogin,
    }),
    dispatch => bindActionCreators(Action, dispatch)
)
export default class Login extends React.Component {
    handleSubmit = (e) => {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.A_userLogin(username, password)
    }
     componentWillReceiveProps(nextProps) {
        if (this.props.R_userLogin != nextProps.R_userLogin) {
           
        }
    }
    onKeyDown = (e) => {
        if (e.keyCode == 13) {
            this.handleSubmit()
        }
    }
    render() {
        return (
            <div>
                <div className="login" onKeyDown = {this.onKeyDown}>
                    <div className="login_input">
                        {/* <img src={require('../../assets/img/login-logo.png')}/> */}
                        <p>登录系统</p>
                        <div className="zh"><span>账号：</span><input type="text" ref="username" /></div>
                        <div className="mm"><span>密码：</span><input type="password" ref="password" /></div>
                        <a onClick={this.handleSubmit.bind(this)}>登录</a>
                    </div>
                </div>
            </div>
        )
    }
}
