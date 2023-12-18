import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // console.log("component is mounting");
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <ul>
          {posts.map((el, index) => {
            return (
              <li className="border-b p-2" key={el.id}>
                {el.id}: {el.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
