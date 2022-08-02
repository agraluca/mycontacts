import { delay } from "utils/delay";
import HttpClient from "./utils/httpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
  }
  listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
  async getContactById(id) {
    await delay(5000);
    return this.httpClient.get(`/contacts/${id}`);
  }
  createContact(contact) {
    return this.httpClient.post("/contacts", {
      body: contact,
    });
  }
  editContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: contact,
    });
  }
  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
