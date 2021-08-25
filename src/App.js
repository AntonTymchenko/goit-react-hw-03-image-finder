import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    imgName: null,
  };
  onSubmit = (imgName) => {
    this.setState({
      imgName,
    });
  };

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imgName={this.state.imgName} />
      </div>
    );
  }
}

export default App;
