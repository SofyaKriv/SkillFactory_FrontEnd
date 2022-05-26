import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import axios from "axios";

//import "./Users.css";


function Users(props) {
    return (
        <React.Fragment>
            Чат с {props.receiver}
        </React.Fragment>
    )
}


export default Users;

