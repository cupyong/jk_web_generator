import React, {PropTypes} from 'react'
import {browserHistory, Link} from 'react-router'
import {  Menu, Icon, Dropdown } from 'antd';
import cookie from 'react-cookies'
export default class Top extends React.Component {
    loginOut = () => {
        cookie.remove('ad_token', { path: '/' })
        cookie.remove('ad_username', { path: '/' })
        cookie.remove('ad_type', { path: '/' })
        browserHistory.push('/login')
    }
    render() {
        let ad_username = cookie.load('ad_username')
        return (
            <div className="tap_bar">
                <div className='tap_bar_item' style={{ width: '200px' }}>
                    <Dropdown overlay={<Menu>
                        {/* <Menu.Item>
                            <a onClick={() => {
                                this.setState({ visible: true })
                            }}>修改密码</a>
                        </Menu.Item> */}
                        <Menu.Item>
                            <a onClick={this.loginOut}>安全退出</a>
                        </Menu.Item>

                    </Menu>} >
                        <a className="ant-dropdown-link" href="#" style={{ width: 'auto', textAlign: "right" }}>
                            <Icon type="user" style={{fontSize:18}} /> 
                            {ad_username}   
                            <Icon type="down" />
                        </a>
                    </Dropdown>

                </div>
            </div>
        )
    }
}
