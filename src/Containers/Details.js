import { connect } from 'react-redux'
import Details from '../Components/Details'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(Details)