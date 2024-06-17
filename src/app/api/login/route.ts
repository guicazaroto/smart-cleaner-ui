 
export async function POST(request: Request) {
  const data = await request.json();
 
  if (data.email === 'gui.cazaroto@gmail.com') {
    const token = Math.random().toString(36).substring(2);

    return new Response(
      `${token}`, 
      { status: 200 })
  }

  return new Response('Unauthorized', { status: 401 })
}
