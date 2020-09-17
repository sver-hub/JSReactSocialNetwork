import {connect} from "react-redux";
import {Navbar} from "./Navbar";


const mapStateToProps = (state) => {
    return {
        navItems: state.navbar.navItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);