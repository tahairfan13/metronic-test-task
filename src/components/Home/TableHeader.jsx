import { Dropdown } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { PiExport } from "react-icons/pi";
import AvatarIcon from "../../assets/images/avatar-gray.svg";

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="searchbar">
        {/* <RxAvatar /> */}
        <img src={AvatarIcon} alt="i" />
        <input placeholder="Search" className="  searchbar-input" />
      </div>
      <div className="filters">
        <button className="export-btn">
          <PiExport className="export-icon" />
          Export
        </button>
        <Dropdown>
          <Dropdown.Toggle className="select" id="dropdown-basic">
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
        <Dropdown>
          <Dropdown.Toggle className="select" id="dropdown-basic">
            Status
            <FaAngleDown />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Active</Dropdown.Item>
            <Dropdown.Item>In active</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default TableHeader;
