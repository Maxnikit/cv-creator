import PropTypes from "prop-types";

function Button({ onClick, text, type }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
