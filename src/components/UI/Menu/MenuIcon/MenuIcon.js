import React from 'react';
import classes from "./MenuIcon.module.css";

const MenuIcon = ( props ) => (
    <div className={classes.MenuIconContainer} onClick={props.clicked}>
        <div className={classes.MenuIcon}></div>
        <div className={classes.MenuIcon}></div>
        <div className={classes.MenuIcon}></div>
    </div>
);

export default MenuIcon;
