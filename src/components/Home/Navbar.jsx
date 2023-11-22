import Logo from "../Logo";
import UserAvatar from "../../assets/images/user-image.png";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiNumber5 } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo color="blue" />
      <div className="navbar-controls">
        <div>
          <IoIosNotificationsOutline
            size={30}
            color="#A1A5B7"
            style={{ strokeWidth: "10" }}
          />
          <RiNumber5 className="notification-badge" />
        </div>
        <CiSearch size={25} color="#A1A5B7" style={{ strokeWidth: "1" }} />
        <img src={UserAvatar} alt="avatar" width="40px" height="40px" />
        <IoIosArrowDown size={25} color="#A1A5B7" />
      </div>
    </div>
  );
};

export default Navbar;
