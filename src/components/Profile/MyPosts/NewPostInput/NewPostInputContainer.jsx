import {
    addPost,
    updateNewPostText,
} from "../../../../redux/profileReducer";
import {NewPostInput} from "./NewPostInput";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    if (state.profile.userData) {
        return {
            imgUrl: state.profile.userData.imgUrl,
            newPostText: state.profile.newPostText,
        }
    } else {
        return {
            newPostText: state.profile.newPostText,
        }
    }
}

export const NewPostInputContainer = connect(mapStateToProps, {addPost, updateNewPostText})(NewPostInput);