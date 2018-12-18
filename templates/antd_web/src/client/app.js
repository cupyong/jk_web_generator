import React    from 'react'
import ReactDOM from 'react-dom'
import store    from '../store'
import { Provider } from 'react-redux'
import { Router, browserHistory} from 'react-router'
import 'antd/dist/antd.min.css'
import router from './router'

const target = document.getElementById('app')
class Root extends React.Component {
    render () {
        return (
            <div>
               <Provider store={store}>
               <div>
                 <Router history={browserHistory} routes={router(store)}/>
                </div>
               </Provider>
            </div>
         )
    }
}
ReactDOM.render(<Root/>, target)
