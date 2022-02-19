import React from "react";
import { BiLibrary } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import {ImPodcast} from 'react-icons/im'
import { Input,Button } from 'antd';
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import './Navbar.css'
import { Albums } from "./Albums";
import axios from "axios";
const { Search } = Input;
export const Navbar = () => {
    const [searchData, setSearchData] = React.useState("");
    const [myData,setMyData] = React.useState([]);
    const [user, setUser] = React.useState(false);
    let data = JSON.parse(sessionStorage.getItem('user')); 
    React.useEffect(() => {
        if (data) {
            setUser(true)
        }
    }, [data]);
    const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearInterval(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
    };
    React.useEffect(() => {
        axios.get("http://localhost:2345/songs/all/top/").then((response) => { setMyData(response.data.songs) }).catch(e => console.log(e))
    }, []);
    console.log("myData", myData);
    let modified=[];
    if (searchData.length > 0) { 
        console.log("searchData",searchData.toUpperCase())
        modified = myData.filter((el) => {
            return el.name.toUpperCase().includes(searchData.toUpperCase());
        });
        console.log('here',modified)
    }
  const handleSearch = myDebounce((e) => {
      console.log(e.target.value);
      setSearchData(e.target.value);
  }, 1000);
    const handleLogout = () => {
        sessionStorage.clear();
        setUser(false)
    }
    return (
    <div>
    <div className="navbar">
           <Link to={'/'}> <div>  <img width="60%" style={{color:"black",paddingTop:"1em"}} src="https://d5fx445wy2wpk.cloudfront.net/static/logo.svg" alt="hamburger" /></div></Link>
            <Link to={'/'}><div className="lists"  style={{display:"flex" ,justifyContent:"center",padding:"1em"}}><AiFillHome style={{fontSize:"3em" ,color:'white'}}/><h2>HOME</h2> </div></Link>
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
            <Search placeholder="search your favorite" onChange={handleSearch} style={{ width: 250 ,marginTop:"1.3em",borderRadius:"2em"}} />
        </div>
            <div></div>
            <div></div>
            {data ? <div style={{display:"flex",alignItems:"center",paddingTop:"0.5em",justifyContent: "center"}} > <CgProfile style={{paddingBottom:"0.2em",fontSize:"3.0em"}} /><h1 style={{color:'white',fontFamily:'sans-serif'}}>{data.firstname + " " + data.lastname}</h1></div>: <Link to={"/register"} style={{ textDecoration: "none" }}> <div style={{ padding: "0.6em" }}><CgProfile style={{ fontSize: "3em" }} /></div></Link>}
            {data ? <div><Button type="danger" style={{marginTop:"1.3em"}} onClick={handleLogout}>Logout</Button></div> : null}
        </div>
    <div style={{width:"30%"}}>
                {modified.length > 0 ? <div>{
                    modified.map((el) => {
                        return (<p>{el.name}</p>)
                    })}</div> : null}
    </div>
    </div>)
}