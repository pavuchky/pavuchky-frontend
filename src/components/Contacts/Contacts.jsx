import React from 'react';

const Contacts = () => {
  const contactsData = [
    { name: 'John Doe', phone: '+1234567890', address: '123 Main St, City' },
    { name: 'Jane Smith', phone: '+9876543210', address: '456 Oak Ave, Town' },
   
  ];

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contactsData.map((contact, index) => (
          <li key={index}>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
