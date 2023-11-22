import PropTypes from "prop-types";
import Vector1 from "../../assets/images/vector1.png";
import Vector2 from "../../assets/images/vector2.png";
import Vector3 from "../../assets/images/vector3.png";
import Vector4 from "../../assets/images/vector4.png";
import Logo from "../Logo";
import ProgressButton from "./ProgressButton";

const BackgroundImages = () => (
  <>
    <img src={Vector1} alt="vector1" className="vector1" />
    <img src={Vector2} alt="vector2" className="vector2" />
    <img src={Vector3} alt="vector3" className="vector3" />
    <img src={Vector4} alt="vector4" className="vector4" />
  </>
);

const Progressbar = ({
  progressbutton,
  setProgressButton,
  progressPanelId,
}) => {
  return (
    <div className="progress-bar">
      <BackgroundImages />
      <Logo height="41px" logoTextColor="white" />
      <ProgressButton
        progressbutton={progressbutton}
        setProgressButton={setProgressButton}
        progressPanelId={progressPanelId}
      />
      <div className="progress-bar-footer">
        <span>Terms</span>
        <span>Plans</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

Progressbar.propTypes = {
  progressbutton: PropTypes.any,
  setProgressButton: PropTypes.any,
  progressPanelId: PropTypes.number,
};

export default Progressbar;
