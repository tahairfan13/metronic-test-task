import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosTrash } from "react-icons/io";
import { PiLinkSimpleBreakBold } from "react-icons/pi";

const CounterButtonsData = [
  {
    id: 1,
    title: 252,
    desc: "Links Scraped",
    color: "#3E97FF",
    icon: (
      <PiLinkSimpleBreakBold
        color="#3E97FF"
        className="icon"
        style={{ backgroundColor: "#3E98FF30" }}
      />
    ),
  },
  {
    id: 2,
    title: 252,
    desc: "Links Manually Checked",
    color: "#5014D0",
    icon: (
      <CiSearch
        color="#5014D0"
        className="icon"
        style={{ backgroundColor: "#5014D030" }}
      />
    ),
  },
  {
    id: 3,
    title: 252,
    desc: "Link Violations",
    color: "#F6C000",
    icon: (
      <BsFillExclamationOctagonFill
        color="#F6C000"
        className="icon"
        style={{ backgroundColor: "#F6C00030" }}
      />
    ),
  },
  {
    id: 4,
    title: 252,
    desc: "Links Removed",
    color: "#F1416C",
    icon: (
      <IoIosTrash
        color="#F1416C"
        className="icon"
        style={{ backgroundColor: "#F1416C30" }}
      />
    ),
  },
];

export default CounterButtonsData;
