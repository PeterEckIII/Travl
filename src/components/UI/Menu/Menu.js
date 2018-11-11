import React, { Component } from 'react';
// import MenuChoices from "./MenuChoices/MenuChoices";
import MenuIcon from "./MenuIcon/MenuIcon";
import classes from "./Menu.module.css";
// import Aux from "../../../hoc/Aux/Aux";
class Menu extends Component {
    state = {
        menuIsOpen: false,
    }

    openMenuToggler = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    render() {
        return (
            <div className={classes.Menu}>
                <MenuIcon onClick={ this.openMenuToggler } />
            </div>  
        )
    }
}

export default Menu;
