import React from "react";
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import {Input,Select,Pagination} from 'antd'
export const Albums = () => {
    const [album, setAlbum] = React.useState([]);
    const [page, setPage] = React.useState("");
    React.useEffect(() => {
        axios.get("http://localhost:2345/album/")
            .then((response) => {
                setAlbum(response.data.album)
                setPage(response.data.total_pages)
            })
            .catch((error) => console.error(error))
    }, []);
    const sortFun = (e) => {
        console.log(e);
        if (e === 'asc') { 
            axios.get(`http://localhost:2345/album/lowToHigh`).then(response => setAlbum(response.data.album))
        } else {
            axios.get(`http://localhost:2345/album/highToLow`).then(response => setAlbum(response.data.album))
        }
    }
    const handleArtist = (e) => {
        console.log(e.target.value);
    }
    console.log(page,album)
    return (
        <div className="main">
        <div className="products">
        {/* <div>Albums here</div> */}
        {album.map((el) => {
            return (<div className="poster" style={{borderRadius:"2em"}}>
                <div>
                <img src={el.album_img} alt={el.name}/>
                </div>
                <Link to={`/songs/${el.name}`}><div className="details">
                    <h2>{el.name}</h2>
                    <h2>{el.artist_id.firstname}&ensp;{el.artist_id.lastname}</h2>
                    <h2>{el.year}</h2>
                </div></Link>
            </div>)
        })}
             <Pagination style={{width:"100%",marginLeft:"110%",display:"flex",justifyContent: "center"}} defaultCurrent={1} total={50} />   
            </div>
            <div className="filter">
                <h1>Sort By Year</h1>
                <Select onChange={sortFun} style={{width: '50%'}}>
                    <option value='asc'>Low To High</option>
                    <option value="dsc">High To Low</option>
                </Select>
                <br></br>
                <br/>
                <h1>Sort By Artist</h1>
                <Input onChange={handleArtist} placeholder="search by artist" style={{width:'50%'}}/>
            </div>
            </div>
    )
}