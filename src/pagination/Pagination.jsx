import React from "react";

const Pagination = ({ postsPerPage, totalPosts, Paging }) => {
    const pageNumber = [];

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumber.map((pageNum) => (
                <li
                    key = {pageNum}
                    className="pagination_item"
                    onClick={() => paging(pageNUm)}
                >
                    {pageNum}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;