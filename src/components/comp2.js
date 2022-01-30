import React from 'react';
import PropTypes from 'prop-types';

import styles from './comp2.css';

export const Comp2 = (props) => {
        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{props.text}</p>
                <button type="button" className={styles.button}>Ja!</button>
            </div>
        );
};


Comp2.propTypes = {
    topic: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
