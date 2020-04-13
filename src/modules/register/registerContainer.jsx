import Register from "./register";
import {withFormik} from "formik";

const RegisterForm = withFormik({
    mapPropsToValues: () => ({ email: '' }),

    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Обязательное поле!';
        }
        else if (!values.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
            errors.email = 'Не правильный E-mail!'
        }

        if (!values.name){
            errors.name = 'Обязательное поле!'
        }
        else if (values.name.length <= 3) {
            errors.name = 'Слишком короткое имя!'
        }

        if (!values.password){
            errors.password = 'Обязательное поле!'
        }
        else if (values.password.length <= 6) {
            errors.password = 'Слишком короткий пароль!'
        }


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