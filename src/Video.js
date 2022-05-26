import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { Link } from "react-router-dom";


import "./Video.css";


function Video(props) {

    return (
        <React.Fragment>
        <tr>
            <tr><h3>{ props.video.title }</h3></tr>
            <tr>
                <video className="center" width="800" controls>
                    <source src={ props.video.video }  type='video/mp4'/>
                </video>
            </tr>
            <tr>
                Автор: { props.video.author }
            </tr>
        </tr>
        </React.Fragment>
    )
}


export default Video;
