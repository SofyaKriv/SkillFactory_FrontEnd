import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import "./VideoDelete.css";


function VideoDelete(props) {
    const {user} = useAuth0();
    let right = false;
    let { videoId } = useParams();
    const [videos, setVideos] = useState({});
    if (!videos.length) {
        axios.get(`http://localhost:8000/api/videos/${videoId}`).then(res => {
            setVideos(res.data);
        });
    }
    if (user.nickname === videos.author) {
        right = true;
        axios.delete(`http://localhost:8000/api/videos/${videoId}`)
    }

    return (
        <React.Fragment>
        <div><Link to="/"><button className="button"><span>Меню</span></button></Link></div>
        <div className="image-container">
            {right ? "Видео успешно удалено" : "У Вас нет прав для удаления этого видео"}
        </div>
        </React.Fragment>
    )
}


export default VideoDelete;

