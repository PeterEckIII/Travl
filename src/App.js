import React, { Component } from 'react';
import MapContainer from "./containers/MapContainer/MapContainer";
import Menu from "./components/UI/Menu/Menu";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Menu />
          <MapContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
