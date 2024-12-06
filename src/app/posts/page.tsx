import prisma from "@/lib/prisma";
import Link from "next/link";

export const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto">
      <h1>Posts</h1>
      <Link href="/posts/create">add post</Link>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
