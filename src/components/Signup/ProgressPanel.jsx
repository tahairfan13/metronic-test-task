import AccountType from "./AccountType";
import PersonalInfo from "./PersonalInfo";
import PropTypes from "prop-types";
// const ProgressPanelArray = {
//   1: <AccountType />,
//   2: <PersonalInfo />,
// };

const ProgressPanel = ({ progressPanelId, setProgressPanelId }) => {
  return (
    <div className="progress-panel">
      {/* {ProgressPanelArray[progressPanelId]} */}
      {progressPanelId === 1 && (
        <AccountType setProgressPanelId={setProgressPanelId} />
      )}
      {progressPanelId === 2 && <PersonalInfo />}
    </div>
  );
};

ProgressPanel.propTypes = {
  progressPanelId: PropTypes.number,
  setProgressPanelId: PropTypes.any,
};

export default ProgressPanel;
