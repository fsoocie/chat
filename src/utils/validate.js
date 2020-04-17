export default ({errors, values, isRegister}) => {
    const rules = {
        email: value => {
            if (!value) {
                errors.email = 'Обязательное поле!';
            } else if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                errors.email = 'Не правильный E-mail!'
            }
        },
        name: value => {
            if (!value) {
                errors.name = 'Обязательное поле!'
            } else if (value.length <= 4) {
                errors.name = 'Слишком короткое имя!'
            }
        },
        password: value => {
            if (!value) {
                errors.password = 'Обязательное поле!'
            } else if (value.length <= 6) {
                errors.password = 'Слишком короткий пароль!'
            }
        }
    };
    Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]))
}