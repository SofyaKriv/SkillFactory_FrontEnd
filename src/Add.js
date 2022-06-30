import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Add.css"

function Add() {
    const [author, setAuthor] = useState('');
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    if (!users.length){
        axios.get("http://localhost:8000/api/users/").then(res => {
            setUsers(res.data);
    });}

    function handleSubmit(event) {
//        event.preventDefault();
        axios.post(`http://localhost:8000/api/videos/`,
        {
            title: title,
            video: video,
            author: author
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
                <form onSubmit={onsubmit}>
                    <div className="author">
                        <label htmlFor="author">Автор</label>
                        <select onChange={(event) => setAuthor(event.target.value)}>
                            {users ? users.map(user => <option value={user.username}/>) : "Пользователь"}
                        </select>
                        <input id="author" type="text" name="author" onChange={(event) => setAuthor(event.target.value)}/>
                    </div>
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


export default Add;

