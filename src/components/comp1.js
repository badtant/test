import React from 'react';
import PropTypes from 'prop-types';

import styles from './comp1.css';

export const Comp1 = (props) => {
        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{props.text}</p>
                <button type="button" className={styles.button}>Ja!</button>
            </div>
        );
};


Comp1.propTypes = {
    topic: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
