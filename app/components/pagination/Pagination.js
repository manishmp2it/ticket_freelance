import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <nav className="flex items-center justify-end mt-4 px-6">
            <button
                className={`px-3 py-1 rounded-l-md ${isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 cursor-pointer'
                    }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
            >
                Previous
            </button>

            <div className="mx-2">
                Page {currentPage} of {totalPages}
            </div>

            <button
                className={`px-3 py-1 rounded-r-md ${isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 cursor-pointer'
                    }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;