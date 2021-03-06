import React, { Component } from 'react';
import './App.css';
import About from './About';
import Footer from './Footer';
import Capstone from './Capstone';
// import Projects from './Projects';
import NavbarClass from './NavbarClass';
import { Container, Row, Col } from 'reactstrap';
import {Switch , Route} from "react-router-dom"
import ProjecDes from "./ProjecDes";




class App extends Component {

   constructor() {
     super();
      this.state = {
        isBlack : false 
      }
     this.handleScroll = this.handleScroll.bind(this);
   }

   componentDidMount(){
     window.addEventListener("scroll", this.handleScroll)
   }

   handleScroll() {
    const {scrollTop} = document.scrollingElement
    if (scrollTop > 475){
      this.setState({
        isBlack : true
      })
    }else {
     this.setState({
      isBlack: false 
     })
    }
   }


  
  render() {
    return (
      <div className="App" >
         <div className="backgrounBody"  ref="nameElement">
         <div className="headerimg">
            <div className="spacer"></div>
            <h4  className="mainTitle"> Nick Zamiatin </h4>
            </div>
            <Container>
              <Switch>
                <Route exact path='/' component={About} />
                <Route  exact path='/project/capstone' component={Capstone}/>
                <Route path='/project/:id' component={ProjecDes}/>
              </Switch>
            </Container>
            <Footer />
            <NavbarClass isBlack={this.state.isBlack} />
        </div>
      </div>
    );
  }
}

export default App;


// https: //codetubeproject.now.sh/video/GyCD--1v8w0
