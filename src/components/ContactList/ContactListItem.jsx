
import { useState } from "react";
import PropTypes from "prop-types";
import Style from "./ContactListItem.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";

function ContactListItem({ id, name, number, deleteContact }) {
  // eslint-disable-next-line no-unused-vars
  const [currentID, setID] = useState(id);
  return (
    <li id={id} className={Style.contact}>
      <p className={Style.name}>{name}</p>
      <p className={Style.number}>{number}</p>
      <button
        className={Style.button}
        onClick={() => deleteContact(id)}
      >
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactListItem);