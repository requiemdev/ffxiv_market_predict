import { configCheck } from "./utils/setup/configCheck.ts";

async function main() {
  console.log("Pre-loading...");
  await configCheck();
  console.log("Pre-load complete!");
  

}

main();
