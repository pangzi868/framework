import React, { Component } from 'react'
import { Switch, withRouter, HashRouter as Router } from 'react-router-dom'
import history from '../../history'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import 'moment/locale/zh-cn'
import AuthRouter from 'components/AuthRouter'
import Loadable from 'components/Loadable'

import 'styles/less/main.less'
import 'styles/sass/main.scss'
import './component.scss'
import 'antd-mobile/dist/antd-mobile.css';

const Root = Loadable(import('./children/Root/index'))

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  static childContextTypes = {
    reduxStore: PropTypes.object
  }

  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      reduxStore: this.props.store
    }
  }

  requireAuth() {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/#/login'
      window.location.reload()
    }
  }

  UNSAFE_componentWillMount() {
  }

  UNSAFE_componentDidMount() {
  }

  render() {
    return (
      // <LocaleProvider locale={zh_CN}>
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <AuthRouter path="/root" component={withRouter(Root)}></AuthRouter>
            <AuthRouter path="/" component={withRouter(Root)}></AuthRouter>
          </Switch>
        </Router>
      </Provider>
      // </LocaleProvider>
    )
  }
}

export default App
