import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='wrapper'>
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
