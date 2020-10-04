import {connect} from "react-redux";
import {Profile} from "./Profile";


const mapStateToProps = (state) => {
    return {
        userData: state.profile.userData,
        posts: state.profile.posts,
    }
}


export const ProfileContainer = connect(mapStateToProps, {})(Profile);