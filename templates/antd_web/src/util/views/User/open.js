import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../actions'
import { Link } from 'react-router'
import LoginCompent from '../../components/Login'
import Loading from '../../components/common/loading.js'
import Body from '../../components/User/open.js'
import moment from 'moment'
import commonFun from '../../util/commonFun.js'


@connect(
    state => ({
        R_getUserActiveOpen: state.R_getUserActiveOpen,
        R_CommonDate:state.R_CommonDate
    }),
    dispatch => bindActionCreators(Action, dispatch)
)

export default class Package extends React.Component {
    componentWillMount() {
        let type = this.props.params.type
        this.props.A_CommonDate1(this.props.R_CommonDate.single,this.props.R_CommonDate.start,this.props.R_CommonDate.end)
        this.props.A_getUserActiveOpen(this.props.R_CommonDate.start, this.props.R_CommonDate.end,type)
    }
    componentDidMount() {

    }
   
    componentWillReceiveProps(nextProps) {
        let type = nextProps.params.type
        if(this.props.R_CommonDate!=nextProps.R_CommonDate){
            this.props.A_getUserActiveOpen(nextProps.R_CommonDate.start, nextProps.R_CommonDate.end,type)
        }
        if(this.props.params!=nextProps.params){
            this.props.A_getUserActiveOpen(nextProps.R_CommonDate.start, nextProps.R_CommonDate.end,type)
        }
    }


    render() {
       
        let { R_getUserActiveOpen } = this.props;
        return (
            <div>
                {
                    R_getUserActiveOpen.list ? <Body data={R_getUserActiveOpen}></Body> : <Loading></Loading>
                }
            </div>
        );
    }
}
