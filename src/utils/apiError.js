export default class ApiError extends Error {
  constructor(response, body) {
    super();

    this.name = "Api Error";
    this.response = response;
    this.body = body;
    this.message = body?.error ?? `${response.status} - ${response.statusText}`;
  }

  getContentType() {
    return this.response.headers.get("Content-Type");
  }
}
