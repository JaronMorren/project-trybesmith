class HttpException extends Error {
  status: number;
  
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
   
export default HttpException;

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/8.3/src/shared/http.exception.ts