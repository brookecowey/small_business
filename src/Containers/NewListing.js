import { connect } from 'react-redux'
import NewListing from '../Components/NewListing'
import { newListing } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        newListing: (listing) => dispatch(addListing(listing))
    }
}

export default connect(null, mapDispatchToProps)(NewListing)
