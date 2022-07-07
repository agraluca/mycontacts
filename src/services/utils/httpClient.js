const { delay } = require("utils/delay");
import ApiError from "utils/apiError";

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    if (options.headers) {
      Object.entries(options.headers).forEach((header) =>
        headers.append(header[0], header[1])
      );
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });
    let responseBody = null;

    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.status >= 200 && response.status <= 299) return responseBody;

    throw new ApiError(response, responseBody);
  }
  get(path, options) {
    return this.makeRequest(path, {
      medthod: "GET",
      headers: options?.headers,
    });
  }
  post(path, options) {
    return this.makeRequest(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }
  put(path, options) {
    return this.makeRequest(path, {
      method: "PUT",
      body: options?.body,
      headers: options?.headers,
    });
  }
  delete(path, options) {
    return this.makeRequest(path, {
      method: "DELETE",
      headers: options?.headers,
    });
  }
}

export default HttpClient;
