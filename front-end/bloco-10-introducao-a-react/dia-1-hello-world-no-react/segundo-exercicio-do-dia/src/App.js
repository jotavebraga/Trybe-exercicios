import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
      <Header />
      <Content />
      <Footer />
      </div> 
    )
  }
}

export default App;
