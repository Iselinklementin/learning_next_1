import PropTypes from "prop-types";

export default function Heading({ className, children }) {
  return <h1 className={className}>{children}</h1>;
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
