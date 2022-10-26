import { delay } from "utils/delay";
import ContactMapper from "./mappers/contactMapper";
import HttpClient from "./utils/httpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
  }
  async listContacts(orderBy = "asc") {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map((contact) => ContactMapper.toDomain(contact));
  }
  async getContactById(id) {
    await delay(2000);
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
  }
  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post("/contacts", {
      body,
    });
  }
  editContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, {
      body,
    });
  }
  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
