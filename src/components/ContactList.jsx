import { useEffect } from "react"
import { useState } from "react"

const ContactList = ({ contacts }) => {
    const [filtred, setFiltred] = useState(contacts)
    useEffect(()=>{
        setFiltred(contacts)
    }, [contacts])
  
    const handleOnChange = ({ target: { value } }) => {
        const input = value.toLowerCase()
        setFiltred(
            contacts.filter((el) => {
                if (el.name.toLowerCase().includes(input) || el.number.toLowerCase().includes(input)) {
                    return el
                } else if (!value.trim()) {
                    return contacts
                }
                return false
            })
        )
    }
    return (
        <div className="contact">
            <h2>Contacts</h2>
            <input onChange={(e) => handleOnChange(e)} type="text" />
            <ul className="contact_list">
                {
                    filtred.map(({ name, number, id }) => (
                        <li key={id} className="contact__item">
                            <span>{name}</span>
                            <span>{number}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactList