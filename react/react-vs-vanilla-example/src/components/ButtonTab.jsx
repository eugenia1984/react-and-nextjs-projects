import PropTypes from 'prop-types';

const ButtonTab = ({ 
  activeContentIndex, 
  setActiveContentIndex, 
  contentIndex,
  text 
}) => {
  return (
    <button
      className={activeContentIndex === contentIndex ? "active" : ""}
      onClick={() => setActiveContentIndex(contentIndex)}
    >
      {text}
    </button>
  );
};

ButtonTab.propTypes = {
  activeContentIndex: PropTypes.number.isRequired,
  setActiveContentIndex: PropTypes.func.isRequired,
  contentIndex: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonTab;