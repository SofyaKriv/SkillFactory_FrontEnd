import React, {useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Video from "./Video";
import { Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import "./Videos.css";

function Videos() {
    const { user } = useAuth0();
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    let cat = [];
    if (!categories.length) {
        axios.get("http://localhost:8000/api/categories/").then(res => {
            for (let i in res.data) {
                for (let j in res.data[i].subscriber) {
                    if (user.nickname === res.data[i].subscriber[j].username) {
                        cat.push(res.data[i].video[0]);
                    }
                }
            }
            setVideos(cat);
        });
    }
    const [searchValue, setSearchValue] = useState("")
    return(
    <React.Fragment>
        <div>
            <Link to="/"><button className="button"><span>Меню</span></button></Link>
            <Link to='/add'><button className="addButton"><span>Добавить видео</span></button></Link>
            <div className="text">ВИДЕО</div>
            <input type="text" name="search" placeholder="Введите значение ... " value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <div className='data'>
                <Table width='100%'>
                    <tbody align='center'>
                        {videos ? videos.filter(video => video.title.match(new RegExp(searchValue, "i"))).map(video => <Video video={video}/>) : 'Видео нет'}
                    </tbody>
                </Table>
            </div>
        </div>
    </React.Fragment>
    );
}

//export default Videos;
export default withAuthenticationRequired(Videos, {
    onRedirecting: () => (<p> Переход на страницу авторизации ... </p>)
});
