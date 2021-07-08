import React, { useState } from "react";

const Posts = ({ posts, loading }) => {
  const [count, setCount] = useState(1);
  const returnVal = () => {
    setCount({ count } + 1);
    return { count };
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
