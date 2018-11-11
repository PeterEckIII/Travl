import React from 'react';
import classes from "./MenuChoice.module.css";

const MenuChoice = ( props ) => (
    <li className={classes.MenuChoice}>
        { props.children }
    </li>
)

export default MenuChoice;
