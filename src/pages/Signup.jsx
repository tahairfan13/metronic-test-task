// import React from 'react'

import { useEffect, useState } from "react";
import ProgressPanel from "../components/Signup/ProgressPanel";
import Progressbar from "../components/Signup/Progressbar";
import AccountType from "../components/Signup/AccountType";
import PersonalInfo from "../components/Signup/PersonalInfo";
import "../css/signup.scss";

const Signup = () => {
  const [progressbutton, setProgressButton] = useState([
    {
      id: 1,
      title: "Account Type",
      desc: "Select your account type",
      active: true,
      component: <AccountType />,
    },
    {
      id: 2,
      title: "Personal Info",
      desc: "Setup your personal Info",
      active: false,
      component: <PersonalInfo />,
    },
    {
      id: 3,
      title: "Verification",
      desc: "Verify your account.",
      active: false,
    },
    {
      id: 4,
      title: "Creator Info",
      desc: "Setup creator details",
      active: false,
    },
    {
      id: 5,
      title: "Completed",
      desc: "Your account is created",
      active: false,
    },
  ]);

  const [progressPanelId, setProgressPanelId] = useState();
  useEffect(() => {
    setProgressPanelId(
      progressbutton.filter((item) => item.active === true)[0].id
    );
  }, [progressbutton]);

  return (
    <div className="signup">
      <Progressbar
        progressbutton={progressbutton}
        setProgressButton={setProgressButton}
        progressPanelId={progressPanelId}
      />
      <ProgressPanel
        progressPanelId={progressPanelId}
        setProgressPanelId={setProgressPanelId}
      />
    </div>
  );
};

export default Signup;
