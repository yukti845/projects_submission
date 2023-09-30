const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
      };
    
      return (
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            <li>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                Previous
              </button>
            </li>
            {/* {getPageNumbers().map((number) => (
              <li key={number}>
                <button
                  onClick={() => onPageChange(number)}
                  className={`px-2 py-1 rounded ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white text-blue-500 hover:bg-blue-200'}`}
                >
                  {number}
                </button>
              </li>
            ))} */}
            <li>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`px-2 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      );
}

export default Pagination