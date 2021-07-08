import react from "react";

const NavigatePrevious = ({ currentPage, indexOfFirstPost, paginate }) => {
  if (indexOfFirstPost === 0) {
    return (
      <span className="m-4">
        <button
          id="nextbtn"
          className="btn btn-primary nav-btn"
          disabled="true"
        >
          {"<"}
        </button>
      </span>
    );
  }

  return (
    <span className="m-4">
      <button
        id="nextbtn"
        className="btn btn-primary nav-btn"
        onClick={() => paginate(currentPage - 1)}
      >
        {"<"}
      </button>
    </span>
  );
};

export default NavigatePrevious;
