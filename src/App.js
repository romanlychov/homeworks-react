import React from 'react';
import style from './App.module.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { v4 as idGenerator } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputValue) {
      const newItem = {
        text: this.state.inputValue,
        id: idGenerator(),
        done: false,
      };
      this.setState({
        todoList: [newItem, ...this.state.todoList],
        inputValue: '',
      });
    }
  }

  handleDone(e) {
    const todoList = [...this.state.todoList];
    todoList.map(element => {
      if (e.id === element.id) {
        element.done = !element.done;
      }
      return element;
    });
    this.setState({ todoList });
  }

  render() {
    return (
      <div>
        <Header />
        <div className={style.wrapper}>
          <Sidebar />
          <Main state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleDone={this.handleDone}
          />
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
