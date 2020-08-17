import React from 'react';

import './Layout.scss';

const Layout = ({ children }) => (
  <div className="Layout">
    <div className="Layout__inner">
      {children}
    </div>
  </div>
);

export default Layout;