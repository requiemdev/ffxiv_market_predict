import fs from "fs";
import path from "path";
import config from "../../../config.json";
import { loadTrends } from "./loadTrends";
/**
 * Checks if config has changed, update the trends
 */

export async function configCheck() {
  const cached: string = path.resolve(
    import.meta.dirname,
    "../../../data/cache",
    "configCache.json"
  );
  const configFile: string = path.resolve(import.meta.dirname,"../../..", "config.json");
  const configContent = fs.readFileSync(configFile, "utf-8");

  // If there doesnt exist a cached config, we assume its the first time the program is being run.
  if (!fs.existsSync(cached)) {
    fs.writeFileSync(cached, configContent, "utf-8");
    await loadTrends();
  }

  // The config has changed, so we should update the trends
  if (
    !equalConfig(
      JSON.parse(configContent),
      JSON.parse(fs.readFileSync(cached, 'utf-8'))
    )
  ) {
    fs.writeFileSync(cached, configContent, "utf-8");
    await loadTrends();
  }
}

function equalConfig(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}
