import { useState } from "react";
import ContactList from "./ContactList";
import Form from "./Form";
import { useEffect } from "react"
export const App = () => {
  
  const [state, setState] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ])
  useEffect(()=>{  console.log(state)}, [state])

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
      <Form addContact={setState}/>
      <ContactList contacts={state}/>
    </div>
  );
};
