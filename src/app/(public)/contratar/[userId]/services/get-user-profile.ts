export async function getUserById(userId: string) {
  const response = await fetch(`http://localhost:3001/users/${userId}`, {
    next: {
      tags: ['get-user-by-id']
    }
  });
  

  return response.json();
}