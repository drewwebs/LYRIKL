import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mDTP = (dispatch) => ({
    action: (formUser) => dispatch(login(formUser)),
    formType: "Login"
});

export default connect(null, mDTP)(SessionForm);
