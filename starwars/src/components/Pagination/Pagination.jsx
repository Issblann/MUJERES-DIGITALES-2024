import React from 'react';
import './Pagination.css'; // Estilos adicionales para paginación

function Pagination({ handlePrevious, handleNext, prevPage, nextPage }) {
    return (
        <div className="pagination">
            <button
                onClick={handlePrevious}
                disabled={!prevPage}
                className="pagination-button"
            >
                Previous
            </button>
            <button
                onClick={handleNext}
                disabled={!nextPage}
                className="pagination-button"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
