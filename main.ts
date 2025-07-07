import { RequestService } from "./utils/requests/RequestService.ts";
import config from "./config.json";

const reqService = RequestService.getInstance(
  "https://docs.saddlebagexchange.com"
);

console.log("Loaded!")

async function main() {
  const payload = {
    server: "Sophia",
    time_period: 168,
    sales_amount: 3,
    average_price: 10000,
    filters: [56, 65, 66, 67, 68, 69, 70, 71, 72, 81, 82],
    sort_by: "marketValue",
  };
  const response = await reqService.post("/api/ffxivmarketshare", payload);
  console.log(response.data);
}

main();
