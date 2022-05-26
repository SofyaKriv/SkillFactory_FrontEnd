import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Video from "./Video";

import "./Videos.css";

function Videos () {
    const [videos, setVideos] = React.useState([]);
    if (!videos.length) {
        axios.get("http://localhost:8000/api/videos/").then(res => {
            setVideos(res.data);
        });
    }

    return(
    <React.Fragment>
        <h1> Видео </h1>
        <Table>
            <tbody>
                {videos.map(video => <Video video={video}/>)}
            </tbody>
        </Table>
    </React.Fragment>
    );
}

export default Videos;
