import { Component } from "react";
import Form from "./Form";


const STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filtered: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ],
  name: '',
  number: ''
}
export class App extends Component {
  state = STATE
  addContact(arg) {
    this.setState((state) => { return { contacts: [arg, ...state.contacts] } })
  }
  dropContact(id) {
    this.setState((state) => { return { contacts: state.contacts.filter((el) => el.id !== id) } })
  }

  handleOnDrop = (id) => {
    this.dropContact(id)
  }

  handleOnChange({ target: { value } }) {
    if (value) {
      this.setState({
        contacts: this.state.contacts.filter((el) => {
          if (el.name.toLowerCase().includes(value) || el.number.toLowerCase().includes(value)) {
            return el
          }
        })
      })
    } else {
      this.setState({ contacts: this.state.filtered })
    }

  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Form addContact={(arg) => this.addContact(arg)} />
        <div className="contact">
          <h2>Contacts</h2>
          <input onChange={(e) => this.handleOnChange(e)} type="text" />
          <ul className="contact_list">
            {
              this.state.contacts.map(({ name, number, id }) => (
                <li key={id} className="contact__item">
                  <span>{name}</span>
                  <span>{number}</span>
                  <button onClick={() => { this.handleOnDrop(id) }}>del</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}