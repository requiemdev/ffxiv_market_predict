import fs from 'fs';
import path from 'path';
import config from "../../config.json";
import { baseUrl } from '../enums/baseUrl';
import { Marketshare } from '../saddlebag/Marketshare';

/**
 * Finds if cached data exists, else fetch and cache data
 */
export async function loadTrends(): Promise<void> {
    const file: string = path.resolve('../../data', "trendCache.json");

    if (!fs.existsSync(file)) {

        // Fetch data using Marketshare function
        const response = await Marketshare(config.world, config.time, config.sales, config.avgPrice, config.filters);
        console.log(response);

        // fs.writeFileSync(file)

    }
}