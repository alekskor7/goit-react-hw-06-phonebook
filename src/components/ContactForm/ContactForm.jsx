import { useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-actions";
import uuid from "react-uuid";
import Style from "./ContactForm.module.css";

const isContactExist = (contactName, contacts) => {
  let contactExist = true;

  contacts.forEach(({ name }) => {
    if (name.toLowerCase() === contactName.toLowerCase()) {
      alert(`${contactName} is already in contacts`);
      contactExist = false;
    }
  });

  return contactExist;
};

function ContactForm({ contacts, addContact }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (isContactExist(name, contacts.items)) {
      addContact({ id: uuid(), name, number });
      reset();
    }
  };

  const handleChange = e => {
  if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.name === "number") {
      setNumber(e.currentTarget.value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={Style.form}>
      <label className={Style.label}>
        Name
        <input
          className={Style.input}
          type="text"
          placeholder="type name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={Style.label}>
        Number
        <input
          className={Style.input}
          type="tel"
          placeholder="999-99-99"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={Style.button}>
        add contact
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContact: ({ id, name, number }) =>
      dispatch(addContact({ id, name, number })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  addContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};