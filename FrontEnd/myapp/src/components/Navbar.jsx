import React from "react";
import { BiLibrary } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import {ImPodcast} from 'react-icons/im'
import { Input,Button } from 'antd';
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import './Navbar.css'
import { Albums } from "./Albums";
const { Search } = Input;
export const Navbar = () => {
    const [user, setUser] = React.useState(false);
    let data = JSON.parse(sessionStorage.getItem('user')); 
    React.useEffect(() => {
        if (data) {
            setUser(true)
        }
    }, [data]);
    const handleLogout = () => {
        sessionStorage.clear();
        setUser(false)
    }
    return (
    <div>
    <div className="navbar">
            <div><img width="60%" style={{color:"black",paddingTop:"1em"}} src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg" alt="hamburger" /></div>
            <div className="lists"  style={{display:"flex" ,justifyContent:"center",padding:"1em"}}><AiFillHome style={{fontSize:"3em" ,color:'white'}}/><h2>HOME</h2> </div>
            <div className="lists" style={{display:"flex" ,justifyContent:"center",padding:"1em"}}><ImPodcast style={{fontSize:"3em" ,color:'white'}} /><h2>PODCASTS</h2></div>
            <div className="lists" style={{ display: "flex"  ,justifyContent:"center",padding:"1em"}}><BiLibrary style={{ fontSize: "3em"  ,color:'white'}} /><h2>LIBRARY</h2></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>    
            <Search placeholder="search your favorite" style={{ width: 250 ,marginTop:"1.3em",borderRadius:"2em"}} />
        </div>
            <div></div>
            <div></div>
            {data ? <div style={{display:"flex",alignItems:"center",paddingTop:"0.5em",justifyContent: "center"}} > <CgProfile style={{paddingBottom:"0.2em",fontSize:"3.0em"}} /><h1 style={{color:'white',fontFamily:'sans-serif'}}>{data.firstname + " " + data.lastname}</h1></div>: <Link to={"/register"} style={{ textDecoration: "none" }}> <div style={{ padding: "0.6em" }}><CgProfile style={{ fontSize: "3em" }} /></div></Link>}
            {data ? <div><Button type="danger" style={{marginTop:"1.3em"}} onClick={handleLogout}>Logout</Button></div> : null}
        </div>
    <div>
        {/* <Albums/> */}
    </div>
    </div>)
}