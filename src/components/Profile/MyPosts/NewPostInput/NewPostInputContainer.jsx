import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {NewPostInput} from "./NewPostInput";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        imgUrl: state.profile.userData.imgUrl,
        newPostText: state.profile.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: () => dispatch(addPostActionCreator()),
        onTextAreaChange: (text) => dispatch(updateNewPostTextActionCreator(text)),
    }
}

export const NewPostInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostInput);