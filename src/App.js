import react, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Components/Posts";
import Pagination from "./Components/Pagination";
import "./App.css";
import { render } from "@testing-library/react";
import NavigateNext from "./Components/NavigateNext";
import NavigatePrevious from "./Components/NavigatePrevious";
import Navigate from "./Components/Navigate";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    setCurrentPage(1);
    fetchPosts();
  }, []);

  // get current posts:
  const indexOfLastPost = currentPage * postsPerPage; // 50
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 50 - 10 =40
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change posts per page
  const changePostsPerPage = (event) => {
    if (event.target.value == "") {
      setPostsPerPage(5);
    } else {
      setPostsPerPage(event.target.value);
    }
  };

  const changePageOnInput = (event) => {
    //if (event.target.value == "") {
    //  setCurrentPage(2);
    //} else {
    setCurrentPage(event.target.value);
    //}
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container">
      <h1 className="text-primary mb-3">My App</h1>
      <Posts posts={currentPosts} loading={loading} />
      No of Posts per page:{" "}
      <input
        id="postsPerPage"
        type="text"
        contentEditable="true"
        className="mb-5"
        size="2"
        className="mr-4 mb-4"
        Value={postsPerPage}
        //onChange={(event) => setPostsPerPage(event.target.value)}
        onChange={changePostsPerPage}
      ></input>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <NavigatePrevious
        currentPage={currentPage}
        indexOfFirstPost={indexOfFirstPost}
        paginate={paginate}
      />
      <input
        type="text"
        value={currentPage}
        size="1"
        contentEditable="true"
        onChange={changePageOnInput}
      ></input>
      <NavigateNext
        currentPage={currentPage}
        indexOfLastPost={indexOfLastPost}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
