import HttpClient from "./utils/httpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
  }
  async listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
  async listContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }
  async createContact(contact) {
    return this.httpClient.post("/contacts", {
      body: contact,
    });
  }
}

export default new ContactsService();
