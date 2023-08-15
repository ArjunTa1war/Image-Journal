import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const port  = process.env.REACT_APP_PORT;
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(`${port}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key = {post._id} {...post} />
      ))}
    </>
  );
}