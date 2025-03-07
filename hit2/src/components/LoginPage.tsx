import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {Input, Form, Button} from "antd";

const LoginPage: React.FC = () => {
        const [username, setUsername] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const navigate  = useNavigate();

        const handleSubmit = (e: FormEvent) => {
                e.preventDefault();

                // Простейшая валидация
                if (username === 'admin' && password === 'password') {
                        // Если логин и пароль совпадают, перенаправляем на главную страницу
                        navigate('/home');
                } else {
                        alert('Неверный логин или пароль');
                }
        };

        const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
        };

        const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
        };

        return (
                <div className="w-100 h-100 d-flex flex-row">
                        <div className="w-50 center flex-column">
                                <div style={{ minWidth: '400px'}}>
                                        <h2 className="text-start">Авторизация</h2>
                                        <Form name="login" initialValues={{ remember: true }} onFinish={handleSubmit} layout="vertical">
                                                <div className="mb-3">
                                                        <label className="mb-2">Логин</label>
                                                        <Form.Item name="username" rules={[{ required: true, message: 'Введите ваш логин!' }]}>
                                                                <Input onChange={handleUsernameChange} />
                                                        </Form.Item>
                                                </div>
                                                <div>
                                                <label className="mb-2">Пароль</label>
                                                        <Form.Item name="password" rules={[{ required: true, message: 'Введите ваш пароль!' }]}>
                                                                <Input.Password onChange={handlePasswordChange} />
                                                        </Form.Item>
                                                        <Form.Item>
                                                                <Button className="btn-40" type="primary" htmlType="submit" block>
                                                                        Войти
                                                                </Button>
                                                        </Form.Item>
                                                </div>
                                        </Form>
                                        </div>
                                </div>
                        <div>
                                <img src="./../assets/img/auth.jpg" alt="" />
                        </div>
                </div>
        );
};

export default LoginPage;
