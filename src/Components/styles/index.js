import PropTypes from "prop-types";
import innerSheet from "react-jss";

const withStyles = (stylesOrCreator, options = {}) => Component =>
  innerSheet(stylesOrCreator)(Component);

withStyles.propTypes = {
  children: PropTypes.any
};

export default withStyles;
