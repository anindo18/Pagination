import react, { useState } from "react";

const Navigate = ({
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  totalPosts,
  paginate,
}) => {
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  console.log(currentPage);
  if (currentPage != 1) {
    setFirstPage(false);
  }

  if (indexOfLastPost === totalPosts) {
    //console.log("inside last page " + lastPage);
    return (
      <span className="m-4">
        <button
          id="nextbtn"
          className="btn btn-primary nav-btn m-5"
          disabled="true"
        >
          {">"}
        </button>
        <button
          id="nextbtn"
          className="btn btn-primary nav-btn m-5"
          onClick={() => paginate(currentPage + 1)}
        >
          {">"}
        </button>
      </span>
    );
  }

  return (
    <span className="m-4">
      <button
        id="prevbtn"
        className="btn btn-primary nav-btn m-4"
        disabled={firstPage}
        onClick={() => paginate(currentPage - 1)}
      >
        {"<"}
      </button>
      <button
        id="nextbtn"
        className="btn btn-primary nav-btn m-4"
        onClick={() => paginate(currentPage + 1)}
      >
        {">"}
      </button>
    </span>
  );
};

export default Navigate;
