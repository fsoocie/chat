import React from 'react';
import {Link} from "react-router-dom";

import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

import WhiteBlock from "../../components/WhiteBlock/WhiteBlock";
import Button from "../../components/Button/Button";

const success = false;
const Register = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <div>
            <div className='auth__head'>
                <h1>Регистрация</h1>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <WhiteBlock>
                {!success ? (
                    <Form
                        name="RegisterForm"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="email"
                            hasFeedback
                            rules={[{required: true, message: 'Пожалуйста, введите E-mail!'}]}
                            help={errors.email && errors.email === 'Обязательное поле!' && touched.email
                                ? 'Обязательное поле!'
                                : errors.email !== 'Обязательное поле!' && errors.email}
                            validateStatus={ !values.email? '':
                                  !errors.email ? 'success': 'error'}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon"/>} size='large'
                                   className='auth__input'
                                   name='email'
                                   placeholder="Введите E-mail"
                                   type="text"
                                   value={values.email}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{required: true, message: 'Пожалуйста, введите имя!'}]}
                            help={errors.name && errors.name === 'Обязательное поле!' && touched.name
                                ? 'Обязательное поле!'
                                : errors.name !== 'Обязательное поле!' && errors.name}
                            validateStatus={ !values.name? '':
                                !errors.name ? 'success': 'error'}

                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                name='name'
                                className='auth__input'
                                size='large'
                                placeholder="Ваше имя"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            hasFeedback
                            name="password"
                            rules={[{required: true, message: 'Пожалуйста, введите пароль!'}]}
                            help={errors.password && errors.password === 'Обязательное поле!' && touched.password
                                ? 'Обязательное поле!'
                                : errors.password !== 'Обязательное поле!' && errors.password}
                            validateStatus={ !values.password? '':
                                !errors.password ? 'success': 'error'}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                name="password"
                                className='auth__input'
                                size='large'
                                placeholder="Пароль"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item
                            name="repeatPassword"
                            rules={[{required: true, message: 'Пожалуйста, повторите пароль!'}]}
                        >
                            <Input
                                name='repeatPassword'
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                className='auth__input'
                                size='large'
                                placeholder="Повторите пароль"
                                value={values.repeatPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button size='large' type='primary' htmlType="submit">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/login' className='auth__link'>Войти в аккаунт</Link>
                        </Form.Item>

                    </Form>
                ) : (
                    <div className='auth__success'>
                        <ExclamationCircleOutlined />
                        <h1>Подтвердите свой аккаунт</h1>
                        <p>На вашу почту отправленно письмо с ссылкой на подтверждение аккаунта</p>
                    </div>
                )}
            </WhiteBlock>
        </div>
    );
};

export default Register;