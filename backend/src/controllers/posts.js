import * as PostService from "../services/post.js";

export const viewAll = async (req, res) => {
	try {
		const posts = await PostService.getAllPosts();
		res.json(posts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
