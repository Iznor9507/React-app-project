import MyButton from "../MyButton/MyButton";

function PrevAndNextPaginationButtons({ setPagination, pagination }) {
  return (
    <>
      {/* ПАГИНАЦИЯ */}
      <MyButton
        disabled={pagination.page === 0}
        onClick={() =>
          setPagination({
            ...pagination,
            page: pagination.page - 1,
            limit: (pagination.limit = 5),
          })
        }
      >
        Предыдущая страница
      </MyButton>
      <MyButton
        disabled={pagination.page === 10}
        onClick={() =>
          setPagination({
            ...pagination,
            page: pagination.page + 1,
            limit: (pagination.limit = 5),
          })
        }
      >
        Следуюшая страница
      </MyButton>
    </>
  );
}

export default PrevAndNextPaginationButtons;
