import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import "./Subscribe.css";


function Subscribe(props) {
    const {user} = useAuth0();
    let { categoryId } = useParams();
    const [categories, setCategories] = useState({});
    if (!categories.length) {
        axios.get(`http://localhost:8000/api/categories/${categoryId}`).then(res => {
            setCategories(res.data);
        });
    }
    function handleClick() {
        axios.post(`http://localhost:8000/api/categories/${categoryId}`, {
            'subscriber': user.nickname,
        },
        {
            headers: {
                "Content-Type": 'application/json'
            }
        }
    )
    .then(res => console.log(res))
    .catch(error => console.err(error))

    }
    return (
        <React.Fragment>
        <div className="image-container">
            <Link to="/categories"><button className="button"><span>Категории</span></button></Link>
            <p className='pSub'> Вы успешно подписались на {categories.theme}! </p>
        </div>
        </React.Fragment>
    )
}


export default Subscribe;

