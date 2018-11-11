import React, { Component } from 'react';
import Aux from "../Aux/Aux";
// import classes from "./Layout.module.css";

class Layout extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <main>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout;
