import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center p-2 text-gray-400 shadow bg-gray-50 hover:bg-gray-50 rounded mx-2 ${
        disabled ? "opacity-50" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// CLIENT-SIDE PAGINATION

export const Pagination = () => {
  const { pages, activePage, setActivePage } = useApp();

  const pageNumbers = Object.keys(pages);
  const isFirstPage = activePage === parseInt(pageNumbers[0]);
  const isLastPage =
    activePage === parseInt(pageNumbers[pageNumbers.length - 1]);

  const handlePageChange = (newPage) => {
    const nextPage = Math.min(Math.max(newPage, 1), pageNumbers.length);
    setActivePage(nextPage);
  };

  const renderPageNumbers = () => {
    return pageNumbers.map((num) => (
      <Link
        key={num}
        to=""
        className={`inline-flex items-center px-4 py-2 text-base font-bold ${
          +num === activePage // STRING -> INT
            ? "ring-2 ring-black bg-white"
            : "text-gray-900 hover:bg-white"
        } shadow bg-gray-50 rounded mx-1`}
        onClick={() => handlePageChange(+num)}
      >
        {num}
      </Link>
    ));
  };

  return (
    <div className="flex items-center justify-center px-4 py-3 sm:px-6 mt-8">
      <div className="flex flex-1 items-center justify-between">
        <nav
          className="inline-flex rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <Button
            onClick={() => handlePageChange(activePage - 1)}
            disabled={isFirstPage}
          >
            <FaAngleLeft className="h-5 w-5" />
          </Button>

          {renderPageNumbers()}

          <Button
            onClick={() => handlePageChange(activePage + 1)}
            disabled={isLastPage}
          >
            <FaAngleRight className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </div>
  );
};
