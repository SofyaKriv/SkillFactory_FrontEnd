import React, {useState} from "react";
import PropTypes, {object} from "prop-types";
import { Link } from "react-router-dom";
import CategoryInfo from "./CategoryInfo";


import "./Category.css";


function Category(props) {
    return (
        <React.Fragment>

            <tr><Link to={`/categories/${props.category.id}`} className='link'> {props.category.theme}</Link></tr>

        </React.Fragment>
    )
}

export default Category;
