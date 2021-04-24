import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

// Parts imports
import Header from "./parts/Header";
import Footer from "./parts/Footer";

// Components imports
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import NewSurvey from "./pages/NewSurvey";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={NewSurvey} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
