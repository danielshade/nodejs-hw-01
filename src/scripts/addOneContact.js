import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  try {
    const newContact = createFakeContact();
    contacts.push(newContact);
    writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
