import React from 'react';
import { Item, Avatar, Name, Number, Phone, Trash } from './ContactItem.styled';
import { IoPersonOutline, IoCallOutline, IoTrashOutline } from 'react-icons/io5';
// import { useDispatch } from 'react-redux'
// import { deleteContact } from '../../redux/contactsSlice'

const ContactItem = ({ contact }) => {
  return (
    <>
        <Item>
          <Avatar><IoPersonOutline size="20px" /></Avatar>
          <Name>{contact.name}:</Name>
          <Number>{contact.phone}</Number>
          <Phone href={`tel: ${contact.phone}`}><IoCallOutline size="20px" /></Phone>
          <Trash><IoTrashOutline size="20px" onClick={() => alert("by")} /></Trash>
        </Item>
    </>
  )
};
  
export default ContactItem;