import React, { Component } from "react";
import MenuIcon from "./MenuIcon/MenuIcon";
import classes from "./Menu.module.css";

class Menu extends Component {
  state = {
    menuIsOpen: false
  };

  openMenuToggler = () => {
    console.log(this.state.menuIsOpen);
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    });
  };

  render() {
    let attachedClasses;
    if (this.state.menuIsOpen) {
      attachedClasses = [classes.Menu, classes.Opened];
    } else if (!this.state.menuIsOpen) {
      attachedClasses = [classes.Menu, classes.Closed];
    }

    // TODO: Conditionally render the Menu choices depending on whether the Menu is open or closed
    return (
      <div className={attachedClasses.join(" ")}>
        <MenuIcon clicked={this.openMenuToggler} />
      </div>
    );
  }
}

export default Menu;
