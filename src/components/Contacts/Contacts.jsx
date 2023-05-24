import ContactItem from "../ContactItem";
import { Contact } from './Contacts.styled'
 import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types';
import { getFilter } from 'redux/filterSlice'
import { useGetPostsQuery } from '../../redux/contactsSlice'


const Contacts = () => {
  const filter = useSelector(getFilter)
  const normalizedFilter = filter.toLowerCase();
  const { data: contacts, error, isLoading } = useGetPostsQuery();

  !isLoading && contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <Contact>
      {isLoading
        ? (<div>Loading...</div>)
        : contacts.map(contact =>
        (<ContactItem key={contact.id} contact={contact} />)
      )}
    </Contact>
  )
};

// {/* return <ContactItem key={id} id={id} name={name} number={phone} />; */}
// <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.phone} />
  
export default Contacts;

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ),
// };