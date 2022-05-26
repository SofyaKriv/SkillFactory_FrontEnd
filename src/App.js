import React from 'react';
import Home from "./Home";
import Videos from "./Videos";
import Categories from "./Categories";
import CategoryInfo from "./CategoryInfo";
import Chat from "./Chat";
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';

function App() {
//                <Route path="/chat" element={<Chat />}/>
    return (
        <React.Fragment>
            <Routes>
                <Route path="/videos" element={<Videos />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/categories/:categoryId" element={<CategoryInfo />}/>

                <Route path="/chat/:senderId/:receiverId" element={<Chat />}/>
                <Route path="/" element={<Home />}></Route>
            </Routes>

        </React.Fragment>
    );
}

export default App;
