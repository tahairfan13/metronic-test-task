import { useState } from "react";
import { Navbar, Panel, Sidebar } from "../components/Home";
import "../css/home.scss";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="home">
      <Navbar />
      <div className="flex">
        <Sidebar setActiveTab={setActiveTab} />
        {activeTab === 1 && <Panel />}
      </div>
    </div>
  );
};

export default Home;
