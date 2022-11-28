import React, { Component } from 'react'
import styles from './OtpComponent.module.css'

const OtpComponent = () => {

    const RenderInput = () => {
        return (<input
            className={`${styles.input}`}
            value={1} />)
    }
    return (
        <div
            className={`${styles.main}`}
        >
            {[1, 2, 3, 4, 5].map((item) => <RenderInput />)}
        </div>
    )
}

export default OtpComponent