export class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.status = 'success';
    this.statusCode = statusCode;
    this.message = message;
    if (data !== null) {
      this.data = data;
    }
  }
}
