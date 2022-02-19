import React from "react";
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
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
    console.log(page,album)
    return (<div className="products">
        {/* <div>Albums here</div> */}
        {album.map((el) => {
            return (<div className="poster" style={{borderRadius:"2em"}}>
                <div>
                <img src={el.album_img} alt={el.name}/>
                </div>
                <Link to={`/songs/${el.name}`}><div className="details">
                    <h2>{el.name}</h2>
                    <h2>{el.artist_id.firstname}</h2>
                    <h2>{el.year}</h2>
                </div></Link>
            </div>)
        })}
    </div>
    )
}