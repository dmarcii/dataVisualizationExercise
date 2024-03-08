import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../state/store";
import { getPosts } from "../../state/api/postsSlice";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user.value);
  const posts = useSelector((state: RootState) => state.posts.value);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts([]));
  }, []);

  /*   const [filteredBreed, setFilteredBreed] = useState("1"); */
  return (
    <div className="container column flex-start">
      <div className="title-container">
        <h1 className="title">Hi {user}</h1>
      </div>
      <div className="spacer-l"></div>
      <div className="button-container">
        <button className="button button-big">New Post</button>
        <button
          className="button button-big"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
      </div>
      <div className="spacer-l"></div>
      <div className="title-container">
        <h1>Posts</h1>
      </div>
      <div className="spacer-m"></div>
      <div className="posts-container">
        {posts
          .slice(0, 4)
          .map(
            (userPost: {
              id: number;
              name: string;
              user: string;
              status: string;
              img: string;
              date: string;
            }) => {
              return (
                <div className="post">
                  <div className="post-header">
                    <p className="text-post">posted by: {userPost.user}</p>
                  </div>
                  <img src={userPost.img} alt="post img" className="post-img" />
                  <div className="post-info">
                    <p className="text-post">
                      <span className="bold">Status: {userPost.status}</span>
                    </p>
                    <p className="text-post-date">
                      <span className="bold">Date: </span>
                      {userPost.date}
                    </p>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default Dashboard;
