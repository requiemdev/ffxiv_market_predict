import { RequestService } from "./utils/requests/RequestService.ts";
import config from "./config.json";
import { Marketshare } from "./utils/saddlebag/Marketshare.ts";

const reqService = RequestService.getInstance(
  "https://docs.saddlebagexchange.com"
);

console.log("Loaded!")

async function main() {
  const increasing: Set<string> = new Set<string>();

  const response = await Marketshare("Sophia", 168, 3, 2000, [], reqService);
  Object.entries(response).forEach(([key, value]) => {
    if (value.state?.data === 'increasing') {
      
    }
  })
  console.log(response)
}

main();
