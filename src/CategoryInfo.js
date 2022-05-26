import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import VideoShow from "./VideoShow";

import "./Category.css";


function CategoryInfo(props) {
    let { categoryId } = useParams();
    const [categories, setCategories] = useState({});
    if (!categories.length) {
        axios.get(`http://localhost:8000/api/categories/${categoryId}`).then(res => {
            setCategories(res.data);
        });
    }

    return (
        <React.Fragment>
            <h3>{ categories.theme }</h3>
            {categories.video ? categories.video.map(video => <VideoShow video={video}/>) : "Видео нет"}
        </React.Fragment>
    )
}


export default CategoryInfo;

