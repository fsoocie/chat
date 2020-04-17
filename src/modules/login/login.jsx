import React from 'react';

import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import WhiteBlock from "../../components/WhiteBlock/WhiteBlock";


const Login = props => {
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
                <h1>Войти в аккаунт</h1>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <WhiteBlock>
                <Form
                    name="LoginForm"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="name"
                        rules={[{required: true, message: 'Пожалуйста, введите Ваше имя!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} size='large'
                               name='name'
                               placeholder="Имя" className='auth__input'
                               value={values.name}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Пожалуйста, введите Ваш пароль!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            name='password'
                            type="password"
                            className='auth__input'
                            size='large'
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type='primary' htmlType="submit">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link to='/register' className='auth__link'>Зарегистрироваться</Link>
                </Form>
            </WhiteBlock>
        </div>
    )
};
export default Login