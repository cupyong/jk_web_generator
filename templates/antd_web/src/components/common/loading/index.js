import React  from 'react'
import {Spin}  from 'antd'
import './index.css'
export default class Loading extends React.PureComponent{
    render(){
        return(
            <div style={this.props.style} className="example">
               {
                    this.props.isLoading ?
                     <Spin className={'large'} size="large" />:
                    <div className='zanwushuju'></div>
               }
            </div>
        )
    }
}