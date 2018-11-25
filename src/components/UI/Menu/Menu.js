import React, { Component } from "react";
import MenuIcon from "./MenuIcon/MenuIcon";
import classes from "./Menu.module.css";
import MenuChoices from "../Menu/MenuChoices/MenuChoices";

class Menu extends Component {
    state = {
        menuIsOpen: false,
        newTripIsOpen: false,
        pastTripsisOpen: false,
        accountIsOpen: false,
        settingsIsOpen: false
    };

    openMenuToggler = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    };

    newTripOpenToggler = () => {
        this.setState({
            newTripIsOpen: !this.state.newTripIsOpen
        });
    };

    render() {
        let attachedClasses;
        this.state.menuIsOpen
            ? (attachedClasses = [classes.Menu, classes.Opened])
            : (attachedClasses = [classes.Menu, classes.Closed]);

        let menuItems;
        this.state.menuIsOpen
            ? (menuItems = <MenuChoices />)
            : (menuItems = null);

        return (
            <div className={attachedClasses.join(" ")}>
                <MenuIcon
                    clicked={this.openMenuToggler}
                    current={this.state.menuIsOpen}
                />
                {menuItems}
            </div>
        );
    }
}

export default Menu;
