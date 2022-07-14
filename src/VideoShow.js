import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';


import "./VideoShow.css";


function VideoShow(props) {
    let videos = [];
    for (let i in props){
        videos.push(props[i])
    }
    const {user} = useAuth0();
    const [userId, setUserId] = useState('');
    const [id, setId] = useState('');
    if (!userId.length) {
        axios.get(`http://localhost:8000/api/users/`).then(res =>
        {
            for (let d in res.data) {
                if (res.data[d].username === props.video.author) {
                    setUserId(res.data[d].id);
                }
                if (res.data[d].username === user.nickname) {
                    setId(res.data[d].id);
                }
            }
        });
    }


    return (
        <React.Fragment>
            {videos
              .map(video => {
                return
                <div>
                    <tr>
                        <tr><h3>{ video.title }</h3></tr>
                        <tr>
                            <video width="800" controls>
                                <source src={ video.video } type='video/mp4'/>
                            </video>
                        </tr>
                        <tr>
                            <h4>Автор: <Link to={`/chat/${id}/${ userId }`} >{ video.author }</Link></h4>
                        </tr>
                    </tr>
                </div>
            })}
        </React.Fragment>
    )
}

VideoShow.propTypes = {
  userId: PropTypes.string
};

export default VideoShow;




