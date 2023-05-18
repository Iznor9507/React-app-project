import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

function PostFilter({ filter, setFilter }) {
  const sortData = [
    { value: "title", nameSort: "По названию" },
    { value: "body", nameSort: "По очереди" },
  ];

  return (
    <div>
      <MyInput
        placeholder="Поиск по названию
        "
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        value={filter.query}
      />
      <MySelect
        onChange={filter.sort}
        value={filter.sort}
        options={sortData}
        defaultValue={"Сортировка по:"}
      />
    </div>
  );
}

export default PostFilter;
