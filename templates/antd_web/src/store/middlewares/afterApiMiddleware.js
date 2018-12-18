/**
 * 登陆中间件
 *
 */
import {notification} from 'antd'
const openNotificationWithIcon = (type, msg = '') => {
    notification[type]({
        message: msg,
    });
};
export default store => next => action => {
    // 这块根据自己的接口形式决定
    // if (action.payload && action.payload.data) {
    //     const code = action.payload.data.code
    //     const msg = action.payload.data.message || '操作失败！'
    //       notification.error({
    //               message: 'Login Fail',
    //               description: msg
    //           });
    //       return

    //   }
    
    if (action.payload){
        let { code, error} = action.payload
        // if (code == 10006){
        //     openNotificationWithIcon('error', error)
        //     return
        // }
        switch (parseInt(code)) {
            case 10006:
                openNotificationWithIcon('error', error)
                return
            case 10001:
                openNotificationWithIcon('error', error)
                return
            case 10007:
                openNotificationWithIcon('error', error)
                return
            case 10003:
                openNotificationWithIcon('error', error)
                return
        }
    }

    next(action)
}
