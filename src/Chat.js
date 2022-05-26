import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams, useSearchParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import Users from "./Users";
import Messages from "./Messages";

import "./Chat.css";


function Chat() {
    const params = useParams();
    const [message, setMessage] = useState('');
    const [done_message, setDonemessage] = useState('');
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    if (!sender.length) {
        axios.get(`http://localhost:8000/api/users/`).then(res => {
            for (let d in res.data) {
                if (res.data[d].id === parseInt(params.senderId)) {
                    setSender(res.data[d].username);

                }
                if (res.data[d].id === parseInt(params.receiverId)) {
                    setReceiver(res.data[d].username);
                }
            }
        });
    }

    function handleClick() {
        console.log('Sending...');
        axios.post(`http://localhost:8000/api/messages/`, {
            'sender': sender,
            'receiver': receiver,
            'message': message,
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
            <div id="users">
                <Users sender={ sender } receiver={ receiver }/>
            </div>
            <form>
                <div id="board">
                    <Messages sender={ sender } receiver={ receiver }/>
                </div>
                <div id="message_send">
                    <input id="message" type="text" name="message" onChange={(event) => setMessage(event.target.value)}/>
                    <input id="send" type="submit" value="Отправить" onClick={() => handleClick()} />
                </div>
            </form>
        </React.Fragment>
    )
}


export default Chat;

