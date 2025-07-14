import { InvalidInputException } from "../exceptions/InvalidInputException"
import { RequestService } from "../requests/RequestService";
import { baseUrl } from "../enums/baseUrl";

export async function Marketshare(world: string, time: number, sales: number, avgPrice: number, filters: Array<number>): Promise<object> {
    validateInputs(world, time, sales, avgPrice, filters);

    const payload = {
      server: world,
      time_period: time,
      sales_amount: sales,
      average_price: avgPrice,
      filters: filters,
      sort_by: "marketValue",
    };

    const instance = RequestService.getInstance();
    const response: object = (await instance.post(baseUrl.Saddlebag + "/api/ffxivmarketshare", payload)).data;
    return response;
}


function validateInputs(world: string, time: number, sales: number, avgPrice: number, filters: Array<number>): void {
  if (!Number.isInteger(time)) {
        throw new InvalidInputException("The time range must be an integer.");
    } else if (!Number.isInteger(sales)) {
        throw new InvalidInputException("The sales must be an integer.");
    }
    filters.forEach((value) => {
      if (!Number.isInteger(value)) {
        throw new InvalidInputException("Filters must be an array of numbers");
      }
    })
}