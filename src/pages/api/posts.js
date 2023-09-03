// pages/api/posts.js

const posts = [
  {
    title: "Movie A",
  },
]; // Our in-memory "database"

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const post = req.body;
    posts.push(post);
    return res.status(201).json(post);
  }

  res.status(405).end(); // Method Not Allowed
}
