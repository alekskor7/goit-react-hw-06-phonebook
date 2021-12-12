import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";
import Style from "./ContactList.module.css";

function ContactList({ contacts }) {
  const filterContacts = (contacts) => {
    if (contacts.filter !== "") {
      return contacts.items.filter(({ name }) =>
        name.includes(contacts.filter)
      );
    } else {
      return contacts.items;
    }
  };
  return (
    <ul className={Style.contacrList}>
      {filterContacts(contacts).map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
