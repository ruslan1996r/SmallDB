import { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from "./Modal"

class ModalPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.portalRoot = document.getElementById('portal');
  }
  componentDidMount() {
    this.portalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    this.portalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(<Modal>{this.props.children}</Modal>, this.el);
  }
}

export default ModalPortal;