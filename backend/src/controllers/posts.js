import * as PostService from "../services/post.js";

export const viewAll = async (req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const viewById = async (req, res) => {
	const { id } = req.params;
  try {
    const post = await PostService.getPost(parseInt(id));
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    if (!title || !content || !authorId) throw new Error("Missing fields");
    await PostService.create({
      title: title,
      content: content,
      authorId: authorId,
    });

    res.status(201).json({ msg: "Post created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
