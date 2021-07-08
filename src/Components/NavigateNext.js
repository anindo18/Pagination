import react from "react";

const NavigateNext = ({
  currentPage,
  indexOfLastPost,
  totalPosts,
  paginate,
}) => {
  //console.log("inside NavigateNext");
  //console.log("outside last page " + lastPage);
  if (indexOfLastPost === totalPosts) {
    //console.log("inside last page " + lastPage);
    return (
      <span className="m-4">
        <button
          id="nextbtn"
          className="btn btn-primary nav-btn"
          disabled="true"
        >
          {">"}
        </button>
      </span>
    );
  }

  return (
    <span className="m-4">
      <button
        id="nextbtn"
        className="btn btn-primary nav-btn"
        onClick={() => paginate(currentPage + 1)}
      >
        {">"}
      </button>
    </span>
  );
};

export default NavigateNext;
