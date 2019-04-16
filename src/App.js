import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Category from './components/work-category/category';
import Footer from './components/footer/footer';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "WebDev"
    };
  };
  setActive = (category) => {
    this.setState({
      active: category
    });
  }
  isActive = (category) => {
    if (category === this.state.active){
      return true;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="about-container">
          <About />
        </div>
        <div className="content">
          <p className="my-work title">My Work</p>
          <div className="categories-container">
            <div className="col" onClick={() => { this.setActive("WebDev") }}>
              <Category type="Web Development" active={this.isActive("WebDev")} />
            </div>
            <div className="col" onClick={() => { this.setActive("Design") }}>
              <Category type="Design" active={this.isActive("Design")}/>
            </div>
            <div className="col" onClick={() => { this.setActive("Photography") }}>
              <Category type="Photography" active={this.isActive("Photography")}/>
            </div>
          </div>
          <p className="coming-soon">Content incoming! Check back soon.</p>
        </div>
        <Footer />
      </div>
    );
  }
}