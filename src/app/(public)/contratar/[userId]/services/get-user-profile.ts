import { BASE_URL } from "@/helpers/constants";

export async function getUserById(userId: string) {
  const response = await fetch(`${BASE_URL}/cleaner/${userId}`, {
    next: {
      tags: ['get-user-by-id']
    }
  });
  

  return response.json();
}