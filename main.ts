import { RequestService } from "./utils/requests/RequestService.ts";
import config from "./config.json";

const reqService = RequestService.getInstance(
  "https://docs.saddlebagexchange.com"
);

console.log("Loaded!")

async function main() {

}

main();
