import React, { Component } from 'react'
import './App.css';
import rawData from "./components/data.json"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedBeast: {},
      allBeasts: rawData,
      showBeastModal: false
    };
  }

  showBeastAsModal = (name) => {

    const selectedBeast = rawData.find(beast => beast.title === name);
    this.setState({ selectedBeast, showBeastModal: true });

  }

  handleCloseModal = () => {
    this.setState({ showBeastModal: false });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          // Lets pass the animal data down to be rendered
          allBeasts={this.state.allBeasts}
          showBeastAsModal={this.showBeastAsModal}
        />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast}
          show={this.state.showBeastModal}
          handleClose={this.handleCloseModal}
        />

        <Footer />
      </div>
    )
  }
}