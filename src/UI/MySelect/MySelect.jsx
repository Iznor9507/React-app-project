function MySelect({ options, defaultValue, onChange, value }) {
  return (
    <>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Сортировка по"
        style={{ margin: "10px 0", width: "120px" }}
      >
        <option disabled>{defaultValue}</option>

        {options.map((sortNames, index) => (
          <option key={index} value="value1">
            {sortNames.nameSort}
          </option>
        ))}
      </select>
    </>
  );
}

export default MySelect;
