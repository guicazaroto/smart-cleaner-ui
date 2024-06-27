import { BASE_URL, DEFAULT_TOKEN } from "@/helpers/constants";

export async function getUserById(userId: string) {
  const response = await fetch(`${BASE_URL}/cleaner/${userId}`, {
    cache: 'no-store',
    next: {
      tags: ['get-user-by-id'],
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': DEFAULT_TOKEN
    }
  });
  

  return response.json();
}