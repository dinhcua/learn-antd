import React, { useState } from 'react'
import { Button, Modal, Form, Input, Checkbox, Typography } from 'antd'
import LogoUrl from '../assets/Logo.png'

const { Title } = Typography

export default function NavBar() {
    const [isSignUp, SetSignUp] = useState(true)
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    function Login() {
        const onFinish = (values) => {
            console.log('Success:', values);
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        }

        return (
            <Form
                name="basic"
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ marginTop: 30 }}
            >
                <Title level={3} style={{ textAlign: 'center', marginBottom: 20 }}>Login</Title>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 5,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                    <Button type='link'>Forgot password?</Button>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 24,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 9,
                        span: 23,
                    }}
                >
                    Or <Button type="link" onClick={() => SetSignUp(false)}>
                        Register now!
                    </Button>
                </Form.Item>
            </Form >

        )
    }
    function Signup() {
        const onFinish = (values) => {
            console.log('Success:', values);
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        }

        return (
            <Form
                name="basic"
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ marginTop: 30 }}
            >
                <Title level={3} style={{ textAlign: 'center', marginBottom: 20 }}>Sign up</Title>
                <Form.Item
                    label="Emal"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="repassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 24,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 23,
                    }}
                >
                    You alrealy have a account <Button type="link" onClick={() => SetSignUp(true)}>
                        Login!
                    </Button>
                </Form.Item>
            </Form >

        )
    }

    return (
        <div className='header'>
            <div className="logo">
                <img src={LogoUrl} alt="logo" />
            </div>
            <div className='nav'>
                <ul className='nav-bar'>
                    <li className='nav-bar-item' >find a trip</li>
                    <li className='nav-bar-item'>destinations</li>
                    <li className='nav-bar-item'>why besnik</li>
                    <li className='nav-bar-item'>contact</li>
                </ul>
            </div>
            <Button size='large' className='btn-create-account' onClick={showModal}>Create Account</Button>
            <Modal
                title={null}
                visible={visible}
                footer={null}
                onCancel={handleCancel}
            >
                {isSignUp ?
                    <Login /> :
                    <Signup />
                }
            </Modal>
        </div>
    )
}
