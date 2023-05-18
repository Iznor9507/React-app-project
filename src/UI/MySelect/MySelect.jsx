function MySelect({ options, defaultValue, onChange, value }) {
  return (
    <>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{ margin: "10px 0", width: "120px" }}
      >
        <option disabled>{defaultValue}</option>

        {options.map((sortNames) => (
          <option key={sortNames.value} value={sortNames.value}>
            {sortNames.nameSort}
          </option>
        ))}
      </select>
    </>
  );
}

export default MySelect;
