import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ children, className, link, to, onClick, ...rest }) => (
  <>
    {link ? (
      <Link
        to={to}
        className={classNames('Button', 'Button--link', className)}
        onClick={onClick}
        {...rest}
      >{children}</Link>
    ) : (
        <button
          type="button"
          className={classNames('Button', className)}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
  </>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  link: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => { },
  className: '',
  link: false,
  to: '',
};

export default Button;