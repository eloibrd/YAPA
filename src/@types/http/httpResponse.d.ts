/**
 * HttpResponse interface to encapsulate api calls responses
 */
interface HttpResponse<T> {
  status: Number;
  data: T;
}
