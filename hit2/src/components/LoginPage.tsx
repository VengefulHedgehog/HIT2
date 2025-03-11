import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Form, Button, Checkbox } from 'antd';
import auth from "../assets/img/auth.jpg";
import H from "../assets/svg/H.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { url_hit_api } from "../dataSource/dataSetting";
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
        const { t } = useTranslation();
        const [login, setLogin] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [rememberMe, setRememberMe] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(false);
        const navigate = useNavigate();

        const handleSubmit = async (e: FormEvent) => {
                e.preventDefault();
                setLoading(true);
                
                try {
                const response = await fetch(url_hit_api + 'Login/Auth', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                                login,
                                password,
                                rememberMe: rememberMe.toString(),
                        }),
                });
                
                const data = await response.json();
                
                if (response.ok && data.Code === 200) {
                        navigate('/home');
                } else {
                        alert(data.ErrorText || 'Ошибка авторизации');
                }
                } catch (error) {
                console.error('Ошибка при авторизации:', error);
                alert('Ошибка соединения с сервером');
                } finally {
                setLoading(false);
                }
        };

        return (
                <div className="w-100 h-100 d-flex flex-row">
                <div className="center flex-column" style={{ minWidth: '450px', width: '45%' }}>
                        <div style={{ minWidth: '400px' }}>
                        <div className="d-flex flex-row align-items-between">
                                <h2 className="w-100 text-start mb-5">{t('Авторизация')}</h2>
                                <LanguageSwitcher />
                        </div>
                        <Form name="login" initialValues={{ remember: true }} layout="vertical">
                                <div className="mb-3">
                                <label className="mb-2">Логин</label>
                                <Form.Item name="username" rules={[{ required: true, message: 'Введите ваш логин!' }]}>
                                        <Input onChange={(e) => setLogin(e.target.value)} />
                                </Form.Item>
                                </div>
                                <div>
                                <label className="mb-2">Пароль</label>
                                <Form.Item name="password" rules={[{ required: true, message: 'Введите ваш пароль!' }]}>
                                        <Input.Password onChange={(e) => setPassword(e.target.value)} />
                                </Form.Item>
                                <Form.Item name="rememberMe" valuePropName="checked">
                                        <Checkbox onChange={(e) => setRememberMe(e.target.checked)}>Запомнить меня</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                        <Button 
                                        onClick={handleSubmit} 
                                        className="btn-40" 
                                        type="primary" 
                                        htmlType="submit" 
                                        loading={loading} 
                                        block 
                                        disabled={!login || !password}>
                                        Войти
                                        </Button>
                                </Form.Item>
                                </div>
                        </Form>
                        </div>
                </div>
                <div className="h-100 overflow-hidden position-relative" style={{ width: '55%' }}>
                        <img className="w-100 h-100" src={auth} alt="Logo" />
                        <img className="position-absolute" src={H} alt="H" style={{ top: '80px', right: '80px', width: '65px', height: '65px' }} />
                </div>
                </div>
        );
};

export default LoginPage;