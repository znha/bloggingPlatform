const apiUrl = process.env.API_URL || 'https://blogging-platform-xx17.vercel.app';

export const createPostApi = async (data) => {
  const res = await fetch(`${apiUrl}/posts/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
};

export const updatePostApi = async (data) => {
  const res = await fetch(`${apiUrl}/posts/edit/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title: data.title, content: data.content, authorId: data.authorId}),
  });

  if (!res.ok) throw new Error('Failed to update post');
  return res.json();
};
