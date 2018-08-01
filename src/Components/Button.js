import React from "react";
import classNames from "classnames";

import withStyles from "./styles";
import styles from "./styles/ButtonStyles";

const Button = ({
  className: propClassName,
  classes,
  disabled,
  variant,
  ...other
}) => {
  const className = classNames(
    classes.root,
    {
      [classes.disabled]: disabled,
      [classes[variant]]: variant
    },
    propClassName
  );
  return <input type="submit" className={className} {...other} />;
};

export default withStyles(styles)(Button);
