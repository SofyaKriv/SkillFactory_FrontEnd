import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams } from 'react-router-dom';
import axios from "axios";

//import "./Messages.css";


function Messages(props) {
    const [messages, setMessages] = useState([]);
    if (!messages.length) {
        axios.get(`http://localhost:8000/api/messages/`).
        then(res => {
            for (let d in res.data) {
                if (res.data[d].sender === props.sender && res.data[d].receiver === props.receiver) {
                    setMessages(res.data[d].message);

                }
        };
    })}
    console.log(messages);
    return (
        <React.Fragment>
            {messages}
        </React.Fragment>
    )
}


export default Messages;

