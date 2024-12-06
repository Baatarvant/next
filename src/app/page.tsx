"user client";

import Map from "../components/Map";

// const posts = await getPosts();

export default async function Home() {
  // fetch(`/api/user/${userId}`);

  return (
    <div className="container mx-auto">
      {/* {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })} */}
      <Map />
    </div>
  );
}
