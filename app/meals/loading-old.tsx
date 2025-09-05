import React from 'react';
import styles from './page.module.css';

export default function loading() {
    return (
        <p className={styles.loading}>Fetching meals...</p>
    )
}
