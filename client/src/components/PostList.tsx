import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useState } from "react";

interface post {
  id: string;
  title: string;
}

const posts: Array<post> = [
  {
    id: "L",
    title: "Yooooooooooooo",
  },
];

export default function PostList(props: any) {
  const [posts, setPosts] = useState<Array<post>>([]);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setPosts(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, [props.num]);
  return (
    <ul style={{ padding: 2 }}>
      {posts.map((post, index) => {
        return (
          <PostItem index={index + 1} content={post.title} pid={post.id} />
        );
      })}
    </ul>
  );
}
