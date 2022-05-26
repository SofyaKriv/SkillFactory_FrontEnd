import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Category from "./Category";
import CategoryInfo from "./CategoryInfo";

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
        <h1> Категории </h1>
        <Table>
            <tbody>
                <tr>
                    {categories.map(category => <Category category={category}/>)}
                </tr>
            </tbody>
        </Table>
    </React.Fragment>
    );
}

export default Categories;
