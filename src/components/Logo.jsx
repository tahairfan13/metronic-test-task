import PropTypes from "prop-types";
import Frame1Green from "../assets/images/logo-frame-1.svg";
import Frame2Green from "../assets/images/logo-frame-2.svg";
import Frame1Blue from "../assets/images/logo-frame-1-blue.svg";
import Frame2Blue from "../assets/images/logo-frame-2-blue.svg";

import MetronicWhite from "../assets/images/metronic-white.svg";
import MetronicBlack from "../assets/images/metronic-black.svg";

const LogoFrame1 = {
  green: Frame1Green,
  blue: Frame1Blue,
};
const LogoFrame2 = {
  green: Frame2Green,
  blue: Frame2Blue,
};
const Metronic = {
  white: MetronicWhite,
  black: MetronicBlack,
};

const Logo = ({ color, height = "24px", logoTextColor }) => {
  return (
    <div className="logo-container">
      <div className="logo">
        <img src={LogoFrame1[color]} alt="Frame1" height={height} />
        <img src={LogoFrame2[color]} alt="Frame2" height={height} />
      </div>
      <img
        src={Metronic[logoTextColor]}
        alt="Metronic"
        width="120px"
        height="16px"
      />
    </div>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  logoTextColor: PropTypes.string,
};

Logo.defaultProps = {
  color: "green",
  height: "24px",
  logoTextColor: "black",
};

export default Logo;
