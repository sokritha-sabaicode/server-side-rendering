export default function About({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://server-side-rendering-amber.vercel.app/api/posts`
      : "http://localhost:3000/api/posts";
  try {
    const res = await fetch(baseUrl);

    if (!res.ok) {
      console.error("Failed to fetch posts:", res.statusText);
      return {
        props: {
          posts: [],
        },
      };
    }

    const posts = await res.json();
    console.log("🚀 ~ file: about.js:30 ~ getServerSideProps ~ posts:", posts);
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
