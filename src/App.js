import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';
import { useFetchContactsQuery } from './redux/operations';

export default function App() {
// const allContacts = useSelector(getContacts);
  const { data: allContacts } = useFetchContactsQuery();
// console.log(data)
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {allContacts && allContacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {allContacts && allContacts.length > 0 && <Filter />}
      <ContactList />
    </div>
  );
}