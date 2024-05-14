export async function getUsers() {
  const response = await fetch('http://localhost:3001/users', {
    next: {
      tags: ['get-users']
    }
  });
  

  return response.json();
}