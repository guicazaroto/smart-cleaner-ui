import { BASE_URL } from "@/helpers/constants";

export async function getUsers(keyword?: string) {
  const url = keyword ? `${BASE_URL}/cleaner?search=${keyword}` : `${BASE_URL}/cleaner`
  
  const response = await fetch(url, {
    next: {
      tags: ['get-users'],
    }
  });
  

  return response.json();
}