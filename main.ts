import { RequestService } from "./utils/requests/RequestService.ts";
import config from "./config.json";

import { loadTrends } from "./utils/setup/loadTrends.ts";
import { configCheck } from "./utils/setup/configCheck.ts";

async function main() {
  console.log("Pre-loading...");
  await configCheck();
  console.log("Pre-load complete!");
}

main();
