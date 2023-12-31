import React from "react";
import { Link } from "react-router-dom";
import "./pagination.scss";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(totalPosts);
  return (
    <>
      {totalPosts > postsPerPage && (
        <div className="paginationWrapper">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                {number === currentPage ? (
                  <div href className="pagination-item pagination-item-active">
                    {currentPage}
                  </div>
                ) : (
                  <div
                    href
                    className="pagination-item"
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
