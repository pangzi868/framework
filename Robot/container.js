import { connect } from 'react-redux'
import Component from './component'
import { getXXX } from 'store/modules/xxx'

const mapDispatchToProps = {
  getXXX
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
