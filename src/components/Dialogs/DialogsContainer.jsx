import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        dialogList: state.dialogs.dialogList,
        messages: state.dialogs.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);