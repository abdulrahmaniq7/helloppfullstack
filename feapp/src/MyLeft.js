// Left.js
import { useEffect, useState } from "react";
import axios from "axios";

export const MyLeft = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(result.data[0]); // just take first post
    };
    fetchPost();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

