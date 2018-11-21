import React from 'react'
import MenuChoice from "./MenuChoice/MenuChoice";
import classes from "./MenuChoices.module.css";

const MenuChoices = ( props ) => (
    <ul>
        <MenuChoice className={classes.MenuChoices}>New Trip</MenuChoice>
        <MenuChoice className={classes.MenuChoices}>Past Trips</MenuChoice>
        <MenuChoice className={classes.MenuChoices}>Settings</MenuChoice>
        <MenuChoice className={classes.MenuChoices}>Account</MenuChoice>
        <MenuChoice className={classes.MenuChoices}>Upgrade</MenuChoice>
    </ul>
)

export default MenuChoices;
