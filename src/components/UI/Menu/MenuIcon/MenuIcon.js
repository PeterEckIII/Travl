import React from "react";
import classes from "./MenuIcon.module.css";

const MenuIcon = props => {
    let attachedClass = [classes.MenuIcon];

    return (
        <div className={classes.MenuIconContainer} onClick={props.clicked}>
            <div className={attachedClass} />
            <div className={attachedClass} />
            <div className={attachedClass} />
        </div>
    );
};

export default MenuIcon;
