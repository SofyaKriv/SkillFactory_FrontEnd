import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./Login";
import LogoutButton from "./Logout";

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
                <Link to="/videos"><button className="button"><span>Видео</span></button></Link>
                <Link to="/categories"><button className="button"><span>Категории</span></button></Link>
                {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
                <div className="textHome">VIDEOSHOW</div>
                {!isAuthenticated ? "Войдите" : "Здравствуйте, " + user.nickname}
            </div>
        </React.Fragment>
    );
}

export default Home;
