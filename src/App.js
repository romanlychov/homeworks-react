import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }

}

export default App;
