import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";

import "./Category.css";


function UserData(user) {
    console.log(user.user);
//    <a href="{% url 'chat' sender=request.user.id receiver=user.user.id %}" class="center">Начать чат</a>
    return (
        <React.Fragment>
        <tr>
            { user.user.username }

        </tr>
        </React.Fragment>
    )
}


export default UserData;

