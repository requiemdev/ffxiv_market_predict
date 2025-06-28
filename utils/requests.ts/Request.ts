import axios, {AxiosInstance} from 'axios';

export class Requests {
    private url: string;
    private instance: AxiosInstance;


    constructor(url: string) {
        this.url = url;
        this.instance = axios.create({
            baseURL: this.url,
            timeout: 1000,
        });
    }

    public async get(endpoint: string, param: object): Promise<object> {
        const response = await this.instance.get(endpoint, {
            params: param,
        });
        return response;
    }

}