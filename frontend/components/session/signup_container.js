import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mDTP = (dispatch) => ({
  action: (formUser) => dispatch(signup(formUser)),
  formType: "Sign Up"
});

export default connect(null, mDTP)(SessionForm);
