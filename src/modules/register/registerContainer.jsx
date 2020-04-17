import Register from "./register";
import {withFormik} from "formik";
import validate from "../../utils/validate";

const RegisterForm = withFormik({
    mapPropsToValues: () => ({ email: '', name: '', password: '', repeatPassword: '' }),

    validate: values => {
        const errors = {};
        validate({errors, values})
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(Register);

export default RegisterForm