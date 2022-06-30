import React, {useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Video from "./Video";
import { Link } from "react-router-dom";

import "./Videos.css";

function Videos (auth) {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    let cat = [];
    if (!categories.length) {
        axios.get("http://localhost:8000/api/categories/").then(res => {
//            setVideos(res.data);
//            if ('22' in res.data.subscriber) {
//                cat.push(res.data.video);
//            }
//            setVideos(cat);
        });
    }
    if (!videos.length) {
        axios.get("http://localhost:8000/api/videos/").then(res => {
            setVideos(res.data);
    });}
    const [searchValue, setSearchValue] = useState("")
    return(
    <React.Fragment>
        <div>
            <Link to="/"><button className="button"><span>Меню</span></button></Link>
            <Link to='/add'><button className="addButton"><span>Добавить видео</span></button></Link>
            <div className="text">ВИДЕО</div>
            <div>{auth.username ? `Привет, {auth.username}` : 'Войдите или зарегистрируйтесь'} </div>
            <input type="text" name="search" placeholder="Введите значение ... " value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <div className='data'>
                <Table width='100%'>
                    <tbody align='center'>
                        {videos.filter(video => video.title.match(new RegExp(searchValue, "i"))).map(video => <Video video={video}/>)}
                    </tbody>
                </Table>
            </div>

        </div>
    </React.Fragment>
    );
}

export default Videos;
