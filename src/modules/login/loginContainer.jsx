import Login from "./login";
import {withFormik} from "formik";
import validate from "../../utils/validate";

import {fetchSignIn} from "../../redux/actions/user";
import {connect} from "react-redux";
import store from "../../redux/store"



const LoginForm = withFormik({
    mapPropsToValues: () => ({email: '', password: ''}),

    // Custom sync validation
    validate: values => {
        const errors = {};
        validate({errors, values, isRegister: false});
        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        store.dispatch(fetchSignIn(values)).then((data) => {
            if (data.status === 'success') {
                setTimeout(() => {
                    props.history.push('/im')
                },50)
            }
            setSubmitting(false)
        })
    },

    displayName: 'LoginForm',
})(Login);

const LoginFormConnected = connect()(LoginForm);
export default LoginFormConnected
