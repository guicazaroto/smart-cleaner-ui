import { BASE_URL } from "@/helpers/constants";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/cleaner`, {
    next: {
      tags: ['get-users']
    }
  });
  

  return response.json();
}