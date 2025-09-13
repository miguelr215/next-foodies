'use client';

import React, { useRef } from 'react';

import styles from './image-picker.module.css';

type ImagePickerProps = {
    label: string,
    name: string
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInput.current?.click();
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <input type="file" accept='image/png, image/jpeg' name={name} id={name} className={styles.input} ref={imageInput} />
                <button className={styles.button} type='button' onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    )
}

export default ImagePicker