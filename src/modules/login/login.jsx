import React from 'react';

import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import WhiteBlock from "../../components/WhiteBlock/WhiteBlock";


const Login = () => {
    return (
        <div>
            <div className='auth__head'>
                <h1>Войти в аккаунт</h1>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <WhiteBlock>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={() => console.log('finish')}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} size='large'
                               placeholder="Username" className='auth__input'/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            className='auth__input'
                            size='large'
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type='primary' className="login-accept-button">
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