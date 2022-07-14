import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import VideoShow from "./VideoShow";
import { Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import "./VideoShow.css";


function CategoryInfo(props) {
    const {user} = useAuth0();
    let { categoryId } = useParams();
    const [categories, setCategories] = useState({});
    let isSub = false;
    if (!categories.length) {
        axios.get(`http://localhost:8000/api/categories/${categoryId}`).then(res => {
            setCategories(res.data);
            if (user.nickname === res.data.subscriber[0].username) {
                isSub = true;
            }
        });
    }
    const [searchValue, setSearchValue] = useState("");
    return (
        <React.Fragment>
        <div>
            <Link to="/categories"><button className="button"><span>Категории</span></button></Link>
            <div className="textCat">{ categories.theme }</div>
            {isSub ? <Link to={`/categories/unsubscribe/${categoryId}`}><button className="buttonSubscribe"><span>Отписаться</span></button></Link> : <Link to={`/categories/subscribe/${categoryId}`}><button className="buttonSubscribe"><span>Подписаться</span></button></Link>}
            <input
                type="text"
                name="search"
                placeholder="Введите значение ... "
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <div className='data'>
                <Table width='100%'>
                    <tbody align='center'>
                        {categories.video ? categories.video.filter(video => video.title.match(new RegExp(searchValue, "i"))).map(video => <VideoShow video={video}/>) : "Видео нет"}
                    </tbody>
                </Table>
            </div>
        </div>
        </React.Fragment>
    )
}


export default CategoryInfo;

