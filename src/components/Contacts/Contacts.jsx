import ContactItem from "../ContactItem";
import { Contact } from './Contacts.styled'
import { useSelector } from 'react-redux'
// import PropTypes from 'prop-types';
import { selectFilter } from 'redux/filterSlice'
import { useGetPostsQuery } from '../../redux/contactsSlice'
// import { selectFilteredContacts} from '../../redux/selectors';

const Contacts = () => {
  const filter = useSelector(selectFilter)
  const normalizedFilter = filter.toLowerCase();
  const { data: contacts, error, isLoading } = useGetPostsQuery();
  
  if (!contacts) {
    return;
  }
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  // console.log(selectFilteredContacts)
  //contactsApi.endpoints.getPosts.useQuery()
  // const test = useSelector(state => contactsApi.endpoints.getPosts.useQuery())
  // console.log(filter)

  return (
    <Contact>
      {isLoading
        ? (<div>Loading...</div>)
        : visibleContacts.map(contact =>
        (<ContactItem key={contact.id} contact={contact} />)
      )}
      {error && <div>Error</div>}
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