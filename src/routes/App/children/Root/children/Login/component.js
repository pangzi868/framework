import React from 'react'
import './component.scss'

class MobileLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  UNSAFE_componentWillMount() {
  }
  render() {
    return (
      <div className="login-mobile-component">
        <h1>Hello React.js</h1>
      </div >
    )

  }
}
export default MobileLogin
