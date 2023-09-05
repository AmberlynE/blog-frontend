import { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import APIURL from "./APIURL";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const response = await fetch(`${APIURL}/posts`);
      const data = await response.json();
      setPosts(data.posts);
      console.log(data.posts);
    };
    makeAPICall();
  }, []);

  return (
    <div>
      {/* Remove container div & h1 */}

      <div id="posts" className="row">
        {!posts ? (
          <p>No posts yet...</p>
        ) : (
          posts.map((eachPost) => {
            return <Post key={eachPost.id} data={eachPost} />;
          })
        )}
      </div>
      {/* <!-- end of posts row--> */}
      <div id="actionLinks">
        <Link to="/newPost">New Post</Link>
      </div>
    </div>
  );
};

export default Home;
