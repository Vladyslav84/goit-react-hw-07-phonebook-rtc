import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
// import * as operations from '../../redux/operations';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/operations';
import contactsApi from '../../redux/operations';
import store from '../../redux/store';
import  filter  from '../Filter/Filter';


export default function ContactList  ()  {
  
  const { data: allContacts } = useFetchContactsQuery();
  const [deleteContact, { data, isLoading: isDeleting }] = useDeleteContactMutation();
  // const qq = useSelector(store);
  // const filter = store.getState().filter;
  // console.log(filterSlice)
  // const dispatch = useDispatch();
  // useEffect(() => , [dispatch]);
//   async function dd (allContacts) {
//         const filteredContactList = await allContacts.filter(contact =>
//         contact.name.toLocaleLowerCase().includes(''));
//     return filteredContactList;
// }
// console.log(dd (allContacts))
  // const filteredContactList = allContacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(''));
 
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