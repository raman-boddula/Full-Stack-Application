import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';

export const Login = () =>
{   
    const [userData, setUserData] = React.useState("");
    const handleChange = (e) => {
        let {id, value} = e.target;
        id = id === "basic_email" ? "email" : "password";
        console.log(id,value)
        setUserData({ ...userData,[id]: value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('userdata', userData);
    }
    return(
        <div style={{width:"30%",position:"absolute",top:"20%",left:"35%"}}>
             <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                    onChange={handleChange}
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                    name="password"
                    onChange={handleChange}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={handleClick} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
           </Form>
</div>
    )
}