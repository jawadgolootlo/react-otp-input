import React, { Component, useEffect, useRef, useState } from 'react'
import styles from './OtpComponent.module.css'

const OtpComponent = () => {

    const [bit1, setBit1] = useState('')
    const [bit2, setBit2] = useState('')
    const [bit3, setBit3] = useState('')
    const [bit4, setBit4] = useState('')
    const [bit5, setBit5] = useState('')
    // 
    //
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)

    useEffect(() => {
        inputRef1.current.focus()
    }, [])


    useEffect(() => {
        if (inputRef1.current && bit1) {
            inputRef1.current.nextElementSibling.focus()
        }
        else {
            inputRef1.current.focus()
        }
    }, [bit1])

    useEffect(() => {
        if (inputRef2.current && bit2) {
            inputRef2.current.nextElementSibling.focus()
        }
        else {
            inputRef2.current.focus()
        }
    }, [bit2])

    useEffect(() => {
        if (inputRef3.current && bit3) {
            inputRef3.current.nextElementSibling.focus()
        }
        else {
            inputRef3.current.focus()
        }
    }, [bit3])

    useEffect(() => {
        if (inputRef4.current && bit4) {
            inputRef4.current.nextElementSibling.focus()
        }
        else {
            inputRef4.current.focus()
        }
    }, [bit4])

    useEffect(() => {
        if (inputRef5.current && bit5) {
        }
        else {
            inputRef5.current.focus()
        }
    }, [bit5])




    // useEffect(() => {
    //     console.log("ref in use effect", inputRef1.current)
    // }, [])

    // console.log("ref in use effect", inputRef1.current)
    // var otp_container = document.querySelector("#otp_container");

    // if (otp_container) {
    //     for (let pin of otp_container.children) {
    //         console.log("pin", pin)
    //         pin.onkeyup = function () {
    //             console.log("onkeyup",)
    //             console.log("current", pin)
    //             console.log('next', pin.nextElementSibling)

    //             if (pin.nextElementSibling) {
    //                 pin.nextElementSibling.focus();
    //             }
    //         }
    //         pin.onkeydown = function () { console.log("onkeydown") }
    //         pin.onkeypress = function () { console.log("onkeypress") }
    //         pin.onChange = function () { console.log("onChange") }

    //     }
    // }


    const RenderInput = ({ placeholder, value, onChange, onKeyPress, autoFocus, myRef, onKeyUp }) => {
        return (<input
            className={`${styles.input}`}
            ref={myRef}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            autoFocus={autoFocus}
            type='number'

        />)
    }

    return (
        <div
            className={`${styles.main}`}
            id='otp_container'
        >

            <RenderInput
                id={'1'}
                placeholder={'a'}
                value={bit1}
                myRef={inputRef1}
                onChange={(event) => { setBit1(event.target.value) }}
                onKeyPress={(e) => {
                    if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || bit1.length >= 1) {
                        e.preventDefault();
                    }
                }}

            autoFocus={true}
            />
            <RenderInput
                id={'2'}
                myRef={inputRef2}
                placeholder={'b'}
                value={bit2}
                onChange={(event) => setBit2(event.target.value)}
                onKeyPress={(e) => {
                    if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || bit2.length >= 1) {
                        e.preventDefault();
                    }
                }}
            />

            <RenderInput
                id={'3'}
                myRef={inputRef3}
                placeholder={'c'}
                value={bit3}
                onChange={(event) => setBit3(event.target.value)}
                onKeyPress={(e) => {
                    if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || bit3.length >= 1) {
                        e.preventDefault();
                    }
                }}
            />

            <RenderInput
                id={'4'}
                myRef={inputRef4}
                placeholder={'d'}
                value={bit4}
                onChange={(event) => setBit4(event.target.value)}
                onKeyPress={(e) => {
                    if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || bit4.length >= 1) {
                        e.preventDefault();
                    }
                }}
            />

            <RenderInput
                id={'5'}
                myRef={inputRef5}
                placeholder={'e'}
                value={bit5}
                onChange={(event) => setBit5(event.target.value)}
                onKeyPress={(e) => {
                    if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || bit5.length >= 1) {
                        e.preventDefault();
                    }
                }}
            />

        </div>
    )
}

export default OtpComponent
