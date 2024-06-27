import { BASE_URL, DEFAULT_TOKEN } from "@/helpers/constants";

export async function getUsers(keyword?: string) {
  const url = keyword ? `${BASE_URL}/cleaner/search?city=${keyword}` : `${BASE_URL}/cleaner/search`
  
  const response = await fetch(url, {
    next: {
      tags: ['users'],
    },
    headers:{
      'Content-Type': 'application/json',
      'Authorization': DEFAULT_TOKEN
    }
  });
  

  return response.json();
}