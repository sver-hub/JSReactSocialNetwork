import {connect} from "react-redux";
import {Profile} from "./Profile";


const mapStateToProps = (state) => {
    return {
        userData: state.profile.userData,
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);