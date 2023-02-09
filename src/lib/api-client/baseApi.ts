import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import initInterceptors from "./interceptors";

export default class BaseApi {
  private _axiosInstance: AxiosInstance | undefined;
  private _baseURL: string;
  private _token: string | null;

  constructor() {
    this._baseURL = process.env.REACT_APP_API_URL ?? "";
    this._token = null;

    this.createAxiosInstance();
  }

  private defaultOptions = (): any => {
    // Set the AUTH token for any request

    const authHttpHeader = "Bearer token"; // Token goes here
    this._token = authHttpHeader;

    const options = {
      baseURL: this._baseURL,
      // withCredentials: true, // Window Authentification
      headers: {
        Accept: "application/json",
        // 'Authorization': `${authHttpHeader}` // OAuth Authetification
      },
    };
    return options;
  };

  /**
   * Create axios instance
   */
  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());

    // this.checkAutorization()

    // Add interceptors
    initInterceptors(this._axiosInstance);
  }

  protected getToken() {
    return this._token;
  }

  protected get(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.get(`${endpoint}`, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected post(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.post(`${endpoint}`, data, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected put(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.put(`${endpoint}`, data, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected delete(endpoint: string, id: any, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.delete(`${endpoint}/${id}`, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
