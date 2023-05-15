import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageLinks = 5;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageLinks = () => {
    let startPage = Math.max(currentPage - Math.floor(maxPageLinks / 2), 1);
    let endPage = startPage + maxPageLinks - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageLinks + 1, 1);
    }

    return pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
      <li key={pageNumber}>
        <a
          href="#"
          className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
            currentPage === pageNumber
              ? "bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-white"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex py-3 ">
        <li>
          <a
            href="#"
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-emerald-50 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
              currentPage === 1 ? "pointer-events-none" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            Previous
          </a>
        </li>
        {renderPageLinks()}
        <li>
          <a
            href="#"
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-emerald-50 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
              currentPage === totalPages ? "pointer-events-none" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
