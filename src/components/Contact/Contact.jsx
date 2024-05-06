import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.name}>
          <FaUser className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.number}>
          <BsFillTelephoneFill className={css.iconPhone} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btnDelete}
        type="sumbit"
        onClick={() => handleDelete(id)}
        id={id}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;