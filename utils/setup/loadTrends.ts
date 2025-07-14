import fs from 'fs';
import path from 'path';
import config from "../../config.json";
/**
 * Finds if cached data exists, else fetch and cache data
 */
export async function loadTrends(): Promise<void> {
    const file: string = path.resolve('../../data', "trendCache.json");

    if (!fs.existsSync(file)) {

        // Fetch data using Marketshare function
        

        // fs.writeFileSync(file)

    }
}