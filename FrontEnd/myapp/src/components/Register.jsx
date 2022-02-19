import React from 'react';
import axios from "axios"
import {  Form,Input, Button } from 'antd';
import {Link,useNavigate} from "react-router-dom"
export const Register = () => {
    const [registerData, setRegisterData] = React.useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({...registerData, [name]:value});
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('here', registerData)
        axios.post("http://localhost:2345/register", registerData)
            .then((response) => {
                alert('Registered Successfully')
                // console.log(response)
                navigate("/login")
            }).catch(e => {
                alert("Something went wrong! Try Again!!")
                console.log(e)
            })
    }
    return (<div className='registerform'>
        <h1>Register here!</h1>
        <Form>
        <Input name="firstname" placeholder="enter first name" onChange={handleChange}/>
        <Input name="lastname" placeholder="enter last name" onChange={handleChange}/>
        <Input name="gender" placeholder="enter gender"  onChange={handleChange}/>
        <Input name="password" type="password" placeholder="enter password" onChange={handleChange}/>
        <Input name="email" placeholder="enter email" onChange={handleChange}/>
        <Input name="username" placeholder="enter username" onChange={handleChange}/>
        <Input name="profile_pic" placeholder="enter profile pic url" onChange={handleChange}/>
        <Input name="role" placeholder="enter you role" onChange={handleChange} />
        <Button type="primary" onClick={handleClick}>Register</Button>
        <h3 style={{marginTop:"1em"}}>Already Registered ??  <Link to={"/login"}><Button style={{ alignItems: 'right' }}>Login</Button></Link></h3>
        
        </Form>
    </div>)
}