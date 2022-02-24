import React from 'react';
import styles from './SectionWrapper.module.scss';
import classnames from 'classnames';

const SectionWrapper = ( { content, id } ) => {

    const classNames = classnames(styles.SectionWrapper)

    return (
        <section id={id} className={classNames}>
            { content }
        </section>
    );
};


export default SectionWrapper;