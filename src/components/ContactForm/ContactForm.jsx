import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useAddContatcMutation,useFetchContactsQuery } from '../../redux/operations';
// console.log(useAddContatcMutation)

export default function ContactForm() {
    const { data: allContacts } = useFetchContactsQuery();
    const [addContatc, { isLoading }] = useAddContatcMutation();
    const handleSubmit = evt => {
        evt.preventDefault();
        if (allContacts.some(contact => contact.name === evt.target.elements.inputName.value))
        {
        alert(`${ evt.target.elements.inputName.value } is already in contacts`)
        } else
        {
        addContatc({
            name: evt.target.elements.inputName.value,
            number: evt.target.elements.inputNumber.value,
        })
        };
        evt.target.reset();
    };

    const numberInputId = uuidv4();
    const nameInputId = uuidv4();

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <span>Name</span>
            <label className={s.formItem}>
                <input
                    autoComplete="off"
                    type="text"
                    name="inputName"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    id={nameInputId}
                />
            </label>
            <span className={s.number}>Number</span>
            <label className={s.formItem}>
                <input
                    autoComplete="off"
                    type="tel"
                    name="inputNumber"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    id={numberInputId}
                />
            </label>
            <button type="submit" disabled={isLoading} className={s.btn}>Add contact</button>
        </form>
    )
}