import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Songs = () => {
    const [songs, setSongs] = React.useState([]);
    const { album } = useParams();

    React.useEffect(() => {
        axios.get(`http://localhost:2345/songs/${album}`).then((response) =>setSongs(response.data.songs)).catch(error => console.log(error));
    },[])
    console.log(album);
    return (
        <div className="songs">
            <div className="songsDiv">
                <div className="seeall">
                <div>Songs</div>
                <div>See All</div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="individualSongs">
                    {songs.map((el) => {
                        return (
                            <div style={{display:"flex",cursor: "pointer",justifyContent:'left',margin:'5px',border:"1px solid gray"}} >
                                <img style={{width:"15%"}} src={el.album_id.album_img} alt={el.album_id}/>
                                <div style={{textAlign:"left",paddingLeft:"0.5em"}}>
                                <h3>{el.name}</h3>
                            <h3>{ el.duration}</h3>   
                                </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )

}