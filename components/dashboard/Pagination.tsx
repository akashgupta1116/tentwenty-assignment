interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
  }: Props) {
    return (
      <div className="mt-6 flex items-center justify-end gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
  
        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                onPageChange(index + 1)
              }
              className={`h-10 w-10 rounded ${
                currentPage === index + 1
                  ? "bg-[#2B64F1] text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
  
        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  }