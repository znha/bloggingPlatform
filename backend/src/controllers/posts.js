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
    res.status(200).json(post);
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

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await PostService.deletePost(parseInt(id));
    res.status(200).json({ msg: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content ) throw new Error("Missing fields");
    await PostService.update({
      id: parseInt(id),
      title: title,
      content: content,
    });

    res.status(200).json({ msg: "Post Updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
