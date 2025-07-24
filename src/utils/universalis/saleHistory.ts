import { RequestService } from "../requests/RequestService";

export async function saleHistory(
  itemId: string,
  world: string,
  entriesWithin: number
) {
  const instance = RequestService.getInstance();
  const response = await instance.get(
    `https://universalis.app/api/v2/history/${world}/${itemId}?entriesWithin=${entriesWithin}`,
    {}
  );

  console.log(response.data)
}
