import PropTypes from "prop-types";
import { useEffect } from "react";

const ProgressButtons = ({
  progressbutton,
  setProgressButton,
  progressPanelId,
}) => {
  useEffect(() => {
    buttonHandler(progressPanelId);
  }, [progressPanelId]);

  const buttonHandler = (id) => {
    if (id) {
      setProgressButton((pre) =>
        pre.map((button) => ({
          ...button,
          active: button.id === id,
        }))
      );
    }
    return;
  };
  return (
    <div className="progress-buttons-container">
      {progressbutton?.map(({ id, title, desc, active }, index) => (
        <div key={id} onClick={() => buttonHandler(id)}>
          <div className="progress-btn">
            <div className={`box ${active ? "active" : "in-active"}`}>{id}</div>
            <div className="text">
              <p>{title}</p>
              <span>{desc}</span>
            </div>
          </div>
          {index < progressbutton.length - 1 && (
            <div className="connector">
              <span></span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ProgressButtons.propTypes = {
  progressbutton: PropTypes.any,
  setProgressButton: PropTypes.any,
  progressPanelId: PropTypes.number,
};

export default ProgressButtons;
