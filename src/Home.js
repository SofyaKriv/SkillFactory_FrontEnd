import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import "./Home.css";

function Home () {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return(
    <React.Fragment>
        <div>
            <Link to="/videos"><button class="button"><span>Видео</span></button></Link>
            <Link to="/categories"><button class="button"><span>Категории</span></button></Link>
            {!isAuthenticated ? <button onClick={loginWithRedirect}>Войти</button> : user.name}
            <div className="textHome">VIDEOSHOW</div>
        </div>
    </React.Fragment>
    );
}

export default Home;
