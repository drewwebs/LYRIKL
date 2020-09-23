import { connect } from "react-redux";
import { login, loginDemo, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formHeader: "Sign In",
  buttonText: "Login",
  user: {
    name: "",
    password: "",
  },
});

const mDTP = (dispatch) => ({
    action: (formUser) => dispatch(login(formUser)),
    loginDemo: () => dispatch(loginDemo()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
