
import AddPostButton from "./components/posts/AddPostBtn";
import PostsList from "./components/posts/PostsList";

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-row justify-between w-full text-center mb-6 sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold  tracking-tight text-[#914151]">
          Posts
        </h1>
        <AddPostButton />
      </div>

      <PostsList posts={posts} />
    </>
  );
}
