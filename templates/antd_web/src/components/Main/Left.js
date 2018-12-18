import React from 'react'
import { Menu, Icon } from 'antd';
import { browserHistory } from 'react-router'
import nav from '../../util/menu.js'
import cookie from 'react-cookies'


export default class Left extends React.Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleClick = (e) => {
        browserHistory.push(e.item.props.path)
    }
    getSelectNav = (pathname) => {
        let openKey, selectKey;
        nav.map(item => {
            if (item.path == pathname) {
                openKey = item.key
                selectKey = item.key
            }
        })
        return {
            openKey: openKey,
            selectKey: selectKey
        }
    };
    
    renderNav = () => {
        let ad_type = cookie.load('ad_type')
        let navList = []
        if (ad_type==1){
            navList = nav
        } else if (ad_type == 2){
            navList=nav.slice(0,5)
        }else if(ad_type == 3){
            navList = nav.slice(0, 3)
        } else if (!ad_type){
            return []
        }
        return navList.map((item) => {
            return (
                <Menu.Item
                    key={item.key}
                    path={item.path}
                    onClick={() => {
                        browserHistory.push(item.path)
                    }}
                >
                    <Icon type={item.Icon} style={{ float: 24 }} />
                    <span>{item.title}</span>
                </Menu.Item>
            )
        })
    }
    render() {
        let pathname = this.props.pathname;
        let selected = this.getSelectNav(pathname)
        return (
            <div className="left_box">
                <div style={{boxSizing:'bordr-box',padding:"10px 25px",height:65}}>
                   
                </div>
                <Menu
                    defaultSelectedKeys={[selected.selectKey]}
                    defaultOpenKeys={[selected.openKey]}
                    mode="inline"
                    theme="dark"
                    style={{ background: "#394263" }}
                    inlineCollapsed={false}
                    selectable={true}
                    onClick={this.handleClick}
                >
                    {
                        this.renderNav()
                    }
                </Menu>
            </div>
        )
    }
}
