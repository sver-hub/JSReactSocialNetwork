import {sendNewMessageActionCreator, textAreaUpdateActonCreator} from "../../../redux/dialogsReducer";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        textAreaContent: state.dialogs.textAreaContent,
        send: state.dialogs.textAreaContent !== '',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: () => dispatch(sendNewMessageActionCreator()),
        onTextAreaChange: (text) => dispatch(textAreaUpdateActonCreator(text)),
    }
}

export const NewMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageInput);