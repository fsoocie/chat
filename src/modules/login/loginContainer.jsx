import Login from "./login";
import {withFormik} from "formik";

const LoginForm = withFormik({
    mapPropsToValues: () => ({ name: '' }),

    // Custom sync validation
    validate: values => {
        const errors = {};
        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(Login)




export default LoginForm
