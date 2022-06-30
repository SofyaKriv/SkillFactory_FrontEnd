import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home () {

    return(
    <React.Fragment>
        <div>
            <Link to="/videos"><button class="button"><span>Видео</span></button></Link>
            <Link to="/categories"><button class="button"><span>Категории</span></button></Link>
            <div className="textHome">VIDEOSHOW</div>
        </div>
    </React.Fragment>
    );
}

export default Home;
