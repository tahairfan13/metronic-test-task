import Pagination from "react-bootstrap/Pagination";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Paginationbar = () => {
  return (
    <div className="paginationbar">
      <Pagination>
        <Pagination.Prev />
        <Pagination>{items}</Pagination>
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default Paginationbar;
