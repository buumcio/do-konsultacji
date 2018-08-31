import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNews from '../../actions/index';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  checkIfSend = (e) => {
    if (e.key === 'Enter') {
      this.props.getNews(this.state.text);
    }
  }

  render() {
    return (
      <input
        type="text"
        className="form-control searchBar"
        placeholder="SEARCH FOR"
        value={this.state.text}
        onChange={this.updateText}
        onKeyPress={this.checkIfSend}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getNews,
}, dispatch);

export default connect(null, mapDispatchToProps)(Searchbar);