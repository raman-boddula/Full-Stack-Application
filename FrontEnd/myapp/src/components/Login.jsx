import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Login = () =>
{   
    const [userData, setUserData] = React.useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        let {id, value} = e.target;
        id = id === "basic_email" ? "email" : "password";
        // console.log(id,value)
        setUserData({ ...userData,[id]: value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('userdata', userData);
        axios.post('http://localhost:2345/login', userData)
            .then(response => {
                alert("Verified Successfully!")
                sessionStorage.setItem('user', JSON.stringify(response.data.user))
                navigate('/home')
            })
            .catch((e) => alert("please provide a valid details"));
        
    }
    return(
        <div style={{width:"25%",marginLeft:"37%",marginTop:"5%"}}>
            <h1>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Login here!</h1> 
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
                Login
                    </Button>
                    <h3 style={{marginTop:'1em'}}>Create an account ! <Link to={'/register'}><Button>Register</Button></Link></h3>
                   
            </Form.Item>
           </Form>
</div>
    )
}