import { RequestService } from "../requests/RequestService";
import fs from "fs";
import path from "path";

export async function saleHistory(
  itemId: string,
  world: string,
  entriesWithin: number
) {

  const file: string = path.resolve(
      import.meta.dirname,
      "../../../data/cache",
      "itemData.json"
    );

    const data: any = []

  const instance = RequestService.getInstance();
  const response = await instance.get(
    `https://universalis.app/api/v2/history/${world}/${itemId}?entriesWithin=${entriesWithin}`,
    {}
  );

  response.data.entries.forEach((entry: any) => {
    data.push(entry)
  })

  fs.writeFileSync(file, JSON.stringify(data))
}
