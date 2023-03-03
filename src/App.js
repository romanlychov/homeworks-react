import React from 'react';
import style from './App.module.css';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
// import Sidebar from './Components/Sidebar/Sidebar';
// import { v4 as idGenerator } from 'uuid';
import MainPeople from './Components/SWAPI/Main/MainPeople';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from './Components/SWAPI/Header/Header';
import MainPlanets from './Components/SWAPI/Main/MainPlanets';
import MainStarships from './Components/SWAPI/Main/MainStarships';
// import PhoneBookForm from './Components/Main/PhoneBook/PhoneBookForm/PhoneBookForm';

// TODO List
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todoList: [],
//       inputValue: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDone = this.handleDone.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ inputValue: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.inputValue) {
//       const newItem = {
//         text: this.state.inputValue,
//         id: idGenerator(),
//         done: false,
//       };
//       this.setState({
//         todoList: [newItem, ...this.state.todoList],
//         inputValue: '',
//       });
//     }
//   }

//   handleDone(e) {
//     const todoList = [...this.state.todoList];
//     todoList.map(element => {
//       if (e.id === element.id) {
//         element.done = !element.done;
//       }
//       return element;
//     });
//     this.setState({ todoList });
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className={style.wrapper}>
//           <Sidebar />
//           <Main state={this.state}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//             handleDone={this.handleDone}
//           />
//         </div>
//         <Footer />
//       </div>
//     );
//   }

// }


// Phone Book
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       phoneBookForm: false,
//       phoneBook: [],
//       firstNameValue: '',
//       lastNameValue: '',
//       phoneNumberValue: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.onClickAddNewContactBtn = this.onClickAddNewContactBtn.bind(this);
//     this.addContactButton = this.addContactButton.bind(this);
//     this.cancelButton = this.cancelButton.bind(this);
//     this.deleteContactButton = this.deleteContactButton.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onClickAddNewContactBtn = () => {
//     this.setState({
//       phoneBookForm: !this.state.phoneBookForm,
//       firstNameValue: '',
//       lastNameValue: '',
//       phoneNumberValue: '',
//     });
//   }

//   addContactButton = (e) => {
//     e.preventDefault();
//     let areAllFieldsFilled = Boolean(this.state.firstNameValue && this.state.lastNameValue && this.state.phoneNumberValue);
//     if (areAllFieldsFilled) {
//       const newContact = {
//         name: this.state.firstNameValue,
//         lastName: this.state.lastNameValue,
//         phoneNumber: this.state.phoneNumberValue,
//         id: idGenerator(),
//       };
//       this.setState({
//         phoneBookForm: false,
//         phoneBook: [...this.state.phoneBook, newContact],
//         firstNameValue: '',
//         lastNameValue: '',
//         phoneNumberValue: '',
//       });
//     } else {
//       alert('All fields must be filled');
//     }
//   }

//   cancelButton = (e) => {
//     e.preventDefault();
//     this.setState({
//       phoneBookForm: false,
//       firstNameValue: '',
//       lastNameValue: '',
//       phoneNumberValue: '',
//     });
//   }

//   deleteContactButton = (e) => {
//     let phoneBook = [...this.state.phoneBook];
//     this.setState({ phoneBook: phoneBook.filter(item => item.id !== e) });
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className={style.wrapper}>
//           <Sidebar />
//           <Main
//             addNewContact={this.onClickAddNewContactBtn}
//             state={this.state}
//             handleChange={this.handleChange}
//             addContactButton={this.addContactButton}
//             cancelButton={this.cancelButton}
//             deleteContactButton={this.deleteContactButton}
//           />
//         </div>
//         <PhoneBookForm
//           state={this.state}
//           handleChange={this.handleChange}
//           addContactButton={this.addContactButton}
//           cancelButton={this.cancelButton}
//         />
//         <Footer />
//       </div>
//     );
//   }

// }

// The Star Wars API
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryResult: [],
      loading: false,
      wasClicked: '',
    }
  }

  getRequest = async (req) => {
    this.setState({
      queryResult: [],
      loading: !this.state.loading
    })
    await fetch(`https://swapi.dev/api/${req}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          queryResult: data.results,
          loading: !this.state.loading,
          wasClicked: req,
        })
      });
  }

  showList = (wasClicked) => {
    switch (wasClicked) {
      case 'people':
        return <MainPeople state={this.state} />;
      case 'planets':
        return <MainPlanets state={this.state} />;
      case 'starships':
        return <MainStarships state={this.state} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Header getRequest={this.getRequest} />
        {this.showList(this.state.wasClicked)}
        <div className={style.center}>
          <BeatLoader color="#ff6" loading={this.state.loading} size={75} />
        </div>
      </div>
    );
  }
}

export default App;
