import React from 'react'
import './component.scss'

class Robot extends React.Component {

  // 成员属性、状态的声明，均在构造函数内部
  constructor(props) {
    super(props)
    this.name = 'Peter'

    this.state = {
      turnOn: false,
    }
  }

  xxxHandler() {
  }

  componentWillMount() {
    // ...
  }

  componentDidMount() {
    // ...
  }

  render () {
    return (
      <div className='Robot-component'>
      </div>
    )
  }
}

export default Robot
