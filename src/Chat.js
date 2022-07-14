import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { useParams, useSearchParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import axios from "axios";
import Users from "./Users";
import Messages from "./Messages";
import { Link } from "react-router-dom";

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
        },
        window.location.reload(),
    )
    .then(res => console.log(res))
    .catch(error => console.err(error))

    }
    return (
        <React.Fragment>
        <div>
            <Link to="/"><button className="button"><span>Меню</span></button></Link>
            <div className="textChat">ЧАТ</div>
            <div className="divChat">
                <Table className="tableChat">
                    <tr id='users'>
                        <Users sender={ sender } receiver={ receiver }/>
                    </tr>
                    <tr id='message'>
                        <Messages sender={ sender } receiver={ receiver }/>
                    </tr>
                    <tr id="message_sendChat">
                        <input id="messageChat" type="text" name="message" onChange={(event) => setMessage(event.target.value)}/>
                        <input id="sendChat" type="submit" value="Отправить" onClick={() => handleClick()} />
                    </tr>
                </Table>
            </div>
        </div>
        </React.Fragment>
    )
}


export default Chat;

