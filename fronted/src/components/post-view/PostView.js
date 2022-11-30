import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PostViewDetail from "./post-view-detail/PostViewDetail";
import "./PostView.scss";
export default function PostView() {
  const { user, posts } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const getAllPosts = async () => {
    dispatch({ type: "POST_REQUEST" });
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/post/getAllPost`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({ type: "POST_SUCESS", payload: data });
    } catch (error) {
      dispatch({ type: "POST_ERROR", payload: error.response.data.message });
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(posts);

  return (
    <div className="post__view">
      <div className="post__view__list">
        {posts &&
          posts.posts &&
          posts?.posts?.map((post, index) => {
            return <PostViewDetail post={post} user={user} key={index} />;
          })}
      </div>
    </div>
  );
}
