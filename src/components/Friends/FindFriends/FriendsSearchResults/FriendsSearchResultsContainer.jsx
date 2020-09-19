import {FriendsSearchResults} from "./FriendsSearchResults";
import {followUnfollowAC} from "../../../../redux/friendsReducer";
const {connect} = require("react-redux");

const mapStateToProps = (state) => {
    return {
        friendsSearchResult: state.friends.friendsSearchResult,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFollowUnfollowClick : (userId) => dispatch(followUnfollowAC(userId)),
    }
}

export const FriendsSearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsSearchResults);