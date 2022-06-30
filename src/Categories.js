import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Category from "./Category";
import CategoryInfo from "./CategoryInfo";
import { Link } from "react-router-dom";

import "./Categories.css";

function Categories() {
    const [categories, setCategories] = React.useState([]);
    if (!categories.length) {
        axios.get("http://localhost:8000/api/categories/").then(res => {
            setCategories(res.data);
        });
    }

    return(
    <React.Fragment>
    <div>
        <Link to="/"><button className="button"><span>Меню</span></button></Link>
        <div className="textCat">КАТЕГОРИИ</div>
        <div className='data'>
            <Table width='100%'>
                <tbody align="center" margin-top="50%">
                    <tr>
                        {categories.map(category => <Category category={category}/>)}
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    </React.Fragment>
    );
}

export default Categories;
