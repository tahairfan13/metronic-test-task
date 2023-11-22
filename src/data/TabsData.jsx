import { RiHome6Line } from "react-icons/ri";
import { FiFilePlus } from "react-icons/fi";
import { RiFilePaper2Line } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageAltError } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";
import { TbGraph } from "react-icons/tb";

const TabsData = [
  { id: 1, title: "Home", icon: <RiHome6Line size={20} />, active: true },
  {
    id: 2,
    title: "Submit Violations",
    icon: <FiFilePlus size={20} />,
    active: false,
  },
  {
    id: 3,
    title: "Whitelist",
    icon: <RiFilePaper2Line size={20} />,
    active: false,
  },
  { id: 4, title: "Billing", icon: <CiViewList size={20} />, active: false },
  {
    id: 5,
    title: "Affiliate Program",
    icon: <TbGraph size={20} />,
    active: false,
  },
  {
    id: 6,
    title: "Settings",
    icon: <IoSettingsOutline size={20} />,
    active: false,
  },
  {
    id: 7,
    title: "FAQ",
    icon: <BiMessageAltError size={20} />,
    active: false,
  },
  {
    id: 8,
    title: "Support",
    icon: <HiOutlineSupport size={20} />,
    active: false,
  },
];

export default TabsData;
