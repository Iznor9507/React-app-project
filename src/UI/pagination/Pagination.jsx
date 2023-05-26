import MyButton from "../MyButton/MyButton";

function Pagination({ setPagination, getLengthPages, pagination }) {
  return (
    <>
      <MyButton
        onClick={() =>
          setPagination({ ...pagination, limit: pagination.limit + 5 })
        }
      >
        Показать больше
      </MyButton>
      <div>
        {getLengthPages.map((page, index) => (
          <button
            key={index}
            style={{ margin: 5, width: 25, height: 25 }}
            onClick={() =>
              setPagination({ ...pagination, page: (pagination.page = page) })
            }
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
