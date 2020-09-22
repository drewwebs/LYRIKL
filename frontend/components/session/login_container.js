import { connect } from "react-redux";
import { login, loginDemo } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = state => ({
    formHeader: "Sign In",
    buttonText: "Login",
    user: {
        name: "",
        password: ""
    }
});

const mDTP = (dispatch) => ({
    action: (formUser) => dispatch(login(formUser)),
    loginDemo: () => dispatch(loginDemo())
});

export default connect(mSTP, mDTP)(SessionForm);
