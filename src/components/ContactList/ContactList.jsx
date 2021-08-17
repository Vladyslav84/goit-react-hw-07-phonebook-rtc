import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter,getfilteredContacts } from '../../redux/selectors';
// import * as operations from '../../redux/operations';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/operations';
import contactsApi from '../../redux/operations';
import store from '../../redux/store';
// import { getFilter } from '../../redux/selectors';

// console.log(getfilteredContacts())

export default function ContactList  ()  {
  
  const { data: allContacts } = useFetchContactsQuery();
  const [deleteContact, { data, isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
 
  return (
    <ul className={s.contactList}>
      { allContacts && allContacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter)).map((user) => (
             
        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => deleteContact(user.id)}
            disabled={isDeleting}
          >{isDeleting ? 'Deliting...' : 'Delete'}</button>
          
        </li>
      ))
      } 
    </ul>
  )
}