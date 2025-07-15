import fs from "fs";
import path from "path";
import config from "../../config.json";
import {
  Marketshare,
  MarketshareResponseInterface,
} from "../saddlebag/Marketshare";

/**
 * Loads data into trendCache from Marketshare function
 */
export async function loadTrends(): Promise<void> {
  const file: string = path.resolve(
    import.meta.dirname,
    "../../data",
    "trendCache.json"
  );

  // Fetch data using Marketshare function
  const response = (await Marketshare(
    config.world,
    config.time,
    config.sales,
    config.avgPrice,
    config.filters
  )) as MarketshareResponseInterface;
  const increasing: any[] = [];

  response.data.forEach((entry: any) => {
    if (entry.state == "increasing") {
      increasing.push(entry);
    }
  });

  //Convert set to JSON so we can write file
  const data = JSON.stringify(increasing);
  fs.writeFileSync(file, data);
  console.log("Fetched new trends!");
}
