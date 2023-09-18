import { useState } from "react"

const Form = ({addContact}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const isValid = () => {
        const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
        const numberRegEx = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
        if(nameRegEx.test(name) && numberRegEx.test(number)){
            return true
        }
        return false
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        const data = Object.fromEntries([...new FormData(e.currentTarget)])
        console.log(data)
        addContact((prev) => [{id: (new Date()).getTime(), ...data}, ...prev])
    }
    return (
        <div className="contact_form">
            <h2>Phonebook</h2>
            <form onSubmit={(e)=> submitHandler(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <input
                        type="tel"
                        name="number"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <button disabled={isValid() ? false : true} type="submit">Add contact</button>
            </form>

        </div>

    )
}

export default Form