import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    );
  }

}

export default App;
