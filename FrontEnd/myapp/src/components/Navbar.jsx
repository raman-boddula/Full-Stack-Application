import React from "react";
import { BiLibrary } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import {ImPodcast} from 'react-icons/im'
import { Input } from 'antd';
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import './Navbar.css'
const { Search } = Input;
export const Navbar = () => {
    return (
        <div className="navbar">
            <div><img width="60%" style={{color:"black",paddingTop:"1em"}} src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg" alt="hamburger" /></div>
            <div style={{display:"flex" ,justifyContent:"center"}}><AiFillHome style={{fontSize:"3em" ,color:'white'}}/><h2 style={{padding:"0.6em"}}>HOME</h2> </div>
            <div style={{display:"flex" ,justifyContent:"center"}}><ImPodcast style={{fontSize:"3em" ,color:'white'}} /><h2 style={{padding:"0.6em"}}>PODCASTS</h2></div>
            <div style={{ display: "flex"  ,justifyContent:"center"}}><BiLibrary style={{ fontSize: "3em"  ,color:'white'}} /><h2 style={{padding:"0.6em"}}>LIBRARY</h2></div>
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
            <Search placeholder="search your favorite" style={{ width: 250, borderRadius:"3em" ,paddingTop:"1em"}} />
        </div>
            <div></div>
            <div></div>
           <Link to={"/login"} style={{textDecoration:"none"}}> <div  style={{padding:"0.6em"}}><CgProfile style={{ fontSize: "3em" }} /></div></Link>
            <div></div>
            <div></div>
        </div>)
}