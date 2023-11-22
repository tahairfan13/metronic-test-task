import { useState } from "react";
import PropTypes from "prop-types";
import TabsData from "../../data/TabsData";

const Sidebar = ({ setActiveTab }) => {
  const [tabs, setTabs] = useState(TabsData);

  const tabClickHandler = (id) => {
    setTabs((pre) =>
      pre.map((button) => ({
        ...button,
        active: button.id === id,
      }))
    );
    setActiveTab(id);
  };

  return (
    <div className="sidebar">
      {tabs?.map(({ id, title, icon, active }) => (
        <button
          className={active ? "active" : "in-active"}
          key={id}
          onClick={() => tabClickHandler(id)}
        >
          {icon}
          {title}
        </button>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  setActiveTab: PropTypes.any,
};

export default Sidebar;
