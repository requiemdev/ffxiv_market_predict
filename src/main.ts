import { configCheck } from "./utils/setup/configCheck.ts";
import { saleHistory } from "./utils/universalis/saleHistory.ts";

async function main() {

  // Pre load and checks
  console.log("Pre-loading...");
  await configCheck();
  console.log("Pre-load complete!");

  await saleHistory("35583", "Cactuar", 2628000);
  

}

main();
