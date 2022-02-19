import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Songs = () => {
    const { album } = useParams();
    console.log(album);
    return (
        <div className="songs">
            <div className="songsDiv">
            <div>{ album}songs</div>

            </div>
        </div>
    )

}