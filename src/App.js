import './App.css';
import Header from './components/Header.js'
import contactsJSON from './data/contacts.json'
import Contact from './components/Contact.js'
import { useState } from 'react';
import ContactForm from './components/ContactForm';


// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts , setContacts] = useState (contactsJSON);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact])
  };

  

  return (
    <div className="App">
      <Header />
      <Contact data = {contacts}/>
      <ContactForm fnaddContact = {addContact}/>

    </div>
  );
};

export default App;
