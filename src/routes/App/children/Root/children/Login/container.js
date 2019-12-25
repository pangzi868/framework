import { connect } from 'react-redux'
import Component from './component'
import { getSMSMessage } from 'store/modules/login'

const mapDispatchToProps = {
  getSMSMessage
}

const mapStateToProps = (state) => ({
  SMSMessage: state.login.SMSMessage
})
export default connect(mapStateToProps, mapDispatchToProps)(Component)
