import CounterButtonsData from "../../data/CounterButtonsData";
import TableData from "../../data/TableData";
import Paginationbar from "./Paginationbar";
import TableHeader from "./TableHeader";
import Table from "react-bootstrap/Table";
import { FaAngleDown, FaSquare } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const Panel = () => {
  const CounterButtons = () => (
    <div className="counter-buttons-container">
      {CounterButtonsData?.map(({ id, title, icon, desc, color }) => (
        <div className="counter-btn" key={id} style={{ borderColor: color }}>
          <div className="heading">
            <p>{title}</p>
            {icon}
          </div>
          <span>{desc}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className="panel">
      <div className="first-row">
        <label htmlFor="dropdown-1">Sort by</label>
        <Dropdown>
          <Dropdown.Toggle className="top-select" id="dropdown-1">
            Today
            <FaAngleDown />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Today</Dropdown.Item>
            <Dropdown.Item>Yesterday</Dropdown.Item>
            <Dropdown.Item>This Week</Dropdown.Item>
            <Dropdown.Item>This Month</Dropdown.Item>
            <Dropdown.Item>Select Date</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <CounterButtons />
      <div className="table-container">
        <TableHeader />
        <Table>
          <thead>
            <tr className="gray">
              <th className="id">
                <FaSquare color="f9f9f9" size={30} />
                id
              </th>
              <th>date removed</th>
              <th>link</th>
              <th>source</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TableData?.map(({ id, date, link, source, action }) => (
              <tr key={id}>
                <td className="id blue">
                  <FaSquare color="f9f9f9" size={30} />
                  {id}
                </td>
                <td className="gray">{date}</td>
                <td>
                  <a href={link}>{link}</a>
                </td>
                <td className="gray">{source}</td>
                <td>
                  <button
                    className={`action-btn ${
                      action === "Removed" ? "success" : "error"
                    }`}
                  >
                    {action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="table-footer">
          <button>Total Result: 455</button>
          <Paginationbar />
        </div>
      </div>
    </div>
  );
};

export default Panel;
