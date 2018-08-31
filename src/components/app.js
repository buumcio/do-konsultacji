import React, { Component } from 'react';
import Articles from './Articles/Articles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import getNews from "../actions/index";
import Searchbar from "./Searchbar/Searchbar";


const config = {
  url :'https://newsapi.org/v1/everything?q=${id}',
  apiKey :"dd073af7eec047328cc984986be40456"
}
class App extends Component {

 constructor(props) {
      super(props);
        this.state = {
            articles:[]
        }
  }

 

  getCurrentNews = id => {
    axios
  	  .get(config.url + 'apiKey=' + config.apiKey)
      .then(res => res.json())
      .then(json => this.setState({articles:json.articles}));
  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
        <Searchbar />
        <div>
      	 <Articles articles={this.state.articles} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNews
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



