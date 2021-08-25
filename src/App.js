import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

class App extends Component {
  state = {
    imgName: null,
    showModal: false,
    src: null,
  };
  onSubmit = (imgName) => {
    this.setState({
      imgName,
    });
  };
  toggleModal = (id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src: id,
    }));
  };

  render() {
    const { showModal, src } = this.state;
    return (
      <div className="App">
        {showModal && <Modal onClose={this.toggleModal} imgInfo={src}></Modal>}
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          imgName={this.state.imgName}
          onCLickImg={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
