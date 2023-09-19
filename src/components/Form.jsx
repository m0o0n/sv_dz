import { Component } from "react"



class Form extends Component {
    submitHandler = (e)=>{
        e.preventDefault()
        const data = Object.fromEntries([...new FormData(e.currentTarget)])
        this.props.addContact({id: (new Date()).getTime(), ...data})
    }

    isValid(){
        
    }
    render() {
        return (
            <div className="contact_form">
                <h2>Phonebook</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
                    <button type="submit">Add contact</button>
                </form>

            </div>
        )
    }
}

export default Form