export const createPostApi = async (data) => {
  const res = await fetch('http://localhost:4000/posts/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
};

export const updatePostApi = async (data) => {
  const res = await fetch(`http://localhost:4000/posts/edit/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title: data.title, content: data.content, authorId: data.authorId}),
  });

  if (!res.ok) throw new Error('Failed to update post');
  return res.json();
};
