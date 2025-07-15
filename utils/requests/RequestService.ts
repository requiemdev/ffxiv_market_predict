import axios, { AxiosInstance, AxiosResponse } from "axios";
/**
 * Request service class to handle all requests in program
 */


export class RequestService {
  private static instance: RequestService;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static getInstance(): RequestService {
    if (!RequestService.instance) {
      RequestService.instance = new RequestService();
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

}
