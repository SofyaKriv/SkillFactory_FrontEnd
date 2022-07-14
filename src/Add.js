import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import "./Add.css"

function Add() {
    const {user} = useAuth0();
    const [author, setAuthor] = useState('');
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [video_id, setVideoId] = useState({});
    if (!video_id.length) {
        axios.get("http://localhost:8000/api/videos/").then(res => {
            setVideoId(res.data[res.data.length - 1].id);
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8000/api/videos/",
        {
            title: title,
            video: video,
            author: user.nickname,
        },
        {
            headers: {
                "Content-Type": 'application/json'
            }
        },
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
        navigate('/videos')
    }

    return (
        <React.Fragment>
            <div>
                <Link to="/"><button className="button"><span>Меню</span></button></Link>
                <div className="textVideo">Добавление видео</div>
                <p> Автор: { user.nickname } </p>
                <form>
                    <div className="title">
                        <label htmlFor="title">Название</label>
                        <input id="title" type="text" name="title" onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="video">
                        <label htmlFor="video">Видеофайл</label>
                        <input id="video" type="file" name="video" onChange={(event) => setVideo(event.target.files[0].name)}/>
                    </div>
                    <input id="submit" type="submit" name="submit" value="Добавить" onClick={() => handleSubmit()}/>
                </form>
            </div>
        </React.Fragment>
    )
}


//export default Add;
export default withAuthenticationRequired(Add, {
    onRedirecting: () => (<p> Переход на страницу авторизации ... </p>)
});
