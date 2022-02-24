import React from 'react';
import classnames from 'classnames';
import styles from './LinkButton.module.scss';

const LinkButton = ({text, link}) => {
  
    const classNames = classnames(styles.Button);
  
    return (
      <>
      <a className={classNames} href={link}>
          {text}
      </a>
      </>
    )
  }
  
export default LinkButton;