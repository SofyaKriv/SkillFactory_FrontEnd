import React from 'react';
import Home from "./Home";
import Videos from "./Videos";
import Categories from "./Categories";
import CategoryInfo from "./CategoryInfo";
import Chat from "./Chat";
import Add from "./Add";
import Login from "./Login";
import Logout from "./Logout";
import Subscribe from "./Subscribe";
import Unsubscribe from "./Unsubscribe";
import VideoDelete from "./VideoDelete";
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/videos" element={<Videos />}/>
                <Route path="/video_delete/:videoId" element={<VideoDelete />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/categories/:categoryId" element={<CategoryInfo />}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/chat/:senderId/:receiverId" element={<Chat />}/>
                <Route path="/categories/subscribe/:categoryId" element={<Subscribe />}></Route>
                <Route path="/categories/unsubscribe/:categoryId" element={<Unsubscribe />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;
