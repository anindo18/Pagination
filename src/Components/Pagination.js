import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);
  }
  // [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <ul className="pagination">
        {PageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a onClick={() => paginate(page)} href="!#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
