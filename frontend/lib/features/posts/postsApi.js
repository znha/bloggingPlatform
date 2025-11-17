export const createPostApi = async (data) => {
  const res = await fetch('http://localhost:4000/posts/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
};
