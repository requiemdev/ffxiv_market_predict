import axios, { AxiosInstance, AxiosResponse } from "axios";

export class RequestService {
  private url: string;
  private static instance: RequestService;
  private axiosInstance: AxiosInstance;

  constructor(url: string) {
    this.url = url;
    this.axiosInstance = axios.create({
      baseURL: this.url,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static getInstance(url: string): RequestService {
    if (!RequestService.instance) {
      RequestService.instance = new RequestService(url);
    }
    return RequestService.instance;
  }

  public async get(
    endpoint: string,
    param: object
  ): Promise<AxiosResponse<any>> {
    const response = await this.axiosInstance
      .get(endpoint, param)
      .catch((error) => {
        console.log(error.message);
        return error.toJSON();
      });
    return response;
  }

  public async post(
    endpoint: string,
    body: object
  ): Promise<AxiosResponse<any>> {
    const response = await this.axiosInstance
      .post(endpoint, body)
      .catch((error) => {
        console.log(error.message);
        return error.toJSON();
      });
    return response;
  }

  public async put(
    endpoint: string,
    body: object
  ): Promise<AxiosResponse<any>> {
    const response = await this.axiosInstance
      .put(endpoint, body)
      .catch((error) => {
        console.log(error.message);
        return error.toJSON();
      });
    return response;
  }

  set baseUrl(url: string) {
    this.url = url;
  }

  get baseUrl(): string {
    return this.url;
  }
}
