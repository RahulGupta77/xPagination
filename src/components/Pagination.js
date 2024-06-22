import React from 'react';

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div>
      <button type='button' onClick={onPrevious} >
        Previous
      </button>
      <span>{currentPage}</span>
      <button type='button' onClick={onNext} >
        Next
      </button>
    </div>
  );
};

export default Pagination;
