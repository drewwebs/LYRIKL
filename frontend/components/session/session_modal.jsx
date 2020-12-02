import React from 'react';
import LogIn from './login_container';
import SignUp from './signup_container';

export default ({formType, setFormType, closeForm}) => (
    <div className="session-modal">{formType === "login" ? <LogIn setFormType={setFormType} closeForm={closeForm} /> : <SignUp setFormType={setFormType} closeForm={closeForm} />}</div>
)