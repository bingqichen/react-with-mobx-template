import React from 'react';
import cx from 'classnames';

import './style.less';

export default (props) => {
  const { className, size = 'normal', src, ...otherProps } = props;
  const cls = cx(
    'component-avatar-wrap',
    size,
    className
  );
  return (
    <div className={cls} {...otherProps}>
      <img src={src} alt="avatar" />
    </div>
  );
};
