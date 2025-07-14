import { RequestService } from "./utils/requests/RequestService.ts";
import config from "./config.json";

import { Marketshare } from "./utils/saddlebag/Marketshare.ts";
import { loadTrends } from "./utils/setup/loadTrends.ts";

const reqService = RequestService.getInstance()

console.log("Loaded!")

async function main() {
  loadTrends();
}

main();
