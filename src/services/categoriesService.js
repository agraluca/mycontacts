import CategoryMapper from "./mappers/categoryMapper";
import HttpClient from "./utils/httpClient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
  }
  async listCategories() {
    const categories = await this.httpClient.get("/categories");

    return categories.map((category) => CategoryMapper.toDomain(category));
  }
}

export default new CategoriesService();
