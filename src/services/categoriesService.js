import HttpClient from "./utils/httpClient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
  }
  listCategories() {
    return this.httpClient.get("/categories");
  }
}

export default new CategoriesService();
