import { connect } from 'react-redux'
import NewListing from '../Components/NewListing'
import { newListing } from '../Redux/Actions'

const mapDispatchToProps = (dispatch) => {
    return {
        newListing: (listing) => dispatch(newListing(listing))
    }
}

export default connect(null, mapDispatchToProps)(NewListing)
