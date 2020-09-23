import { connect } from "react-redux";
import { signup, loginDemo } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formHeader: "Sign Up",
  buttonText: "Create Account",
  user: {
    username: "",
    email: "",
    password: ""
  }
});

const mDTP = (dispatch) => ({
  action: (formUser) => dispatch(signup(formUser)),
  loginDemo: () => dispatch(loginDemo()),
});

export default connect(mSTP, mDTP)(SessionForm);
