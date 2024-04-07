import PropTypes from "prop-types";

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;