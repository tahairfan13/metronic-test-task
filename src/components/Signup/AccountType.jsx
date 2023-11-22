import CreatorIcon from "../../assets/images/creator-icon.svg";
import AgencyIcon from "../../assets/images/agency-icon.svg";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const AccountType = ({ setProgressPanelId }) => {
  return (
    <div className="account-type">
      <div className="heading">
        <p>Choose an account type</p>
        <span>
          If you need more info, please visit our <a href="#">help page.</a>
        </span>
      </div>
      <div className="select-boxes">
        <div className="box active">
          <img src={CreatorIcon} alt="creator" />
          <div className="text">
            <p>Creator</p>
            <span>Sign-up as a creator</span>
          </div>
        </div>
        <div className="box in-active">
          <img src={AgencyIcon} alt="creator" />
          <div className="text">
            <p>Agency</p>
            <span>Sign-up as an agency</span>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => setProgressPanelId(2)}>
          Continue
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

AccountType.propTypes = {
  setProgressPanelId: PropTypes.any,
};

export default AccountType;
