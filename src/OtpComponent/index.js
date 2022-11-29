import React, { useEffect, useState } from 'react'
import styles from './OtpComponent.module.css'

const OtpComponent = () => {

    const [bit1, setBit1] = useState('')
    const [bit2, setBit2] = useState('')
    const [bit3, setBit3] = useState('')
    const [bit4, setBit4] = useState('')
    const [bit5, setBit5] = useState('')
    // 
    const [current, setCurrent] = useState({
        id: null,
        shift_focus: false
    });

    useEffect(() => {
        if (current.id) {
            let target
            if (current.shift_focus) {
                target = document.getElementById(current.id + 1)
                if (!target) {
                    target = document.getElementById(current.id)
                }
                target.focus()
            }
            else {
                target = document.getElementById(current.id);
                target.focus()
            }
        }
    }, [current])

    const setFocusFlow = (event) => {

        if (event.target.value) {
            setCurrent(
                {
                    id: parseInt(event.target.id),
                    shift_focus: true
                }
            )
        }
        else {
            setCurrent(
                {
                    id: parseInt(event.target.id),
                    shift_focus: false
                }
            )
        }

    }

    const RenderInput = ({ id, placeholder, value, onChange, autoFocus, myRef }) => {
        return (<input
            id={id}
            className={`${styles.input}`}
            ref={myRef}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyPress={(e) => {
                if (e.code === 'Minus' || e.code === 'Equal' || e.code === 'Period' || value.length >= 1) {
                    e.preventDefault();
                }
            }}
            autoFocus={autoFocus}
            type='number'
        />)
    }

    return (
        <div className={`${styles.main}`}        >
            <RenderInput
                id={'1'}
                placeholder={'a'}
                value={bit1}
                onChange={(event) => {
                    setBit1(event.target.value)
                    setFocusFlow(event)

                }}
                autoFocus={true}
            />
            <RenderInput
                id={'2'}
                placeholder={'b'}
                value={bit2}
                onChange={(event) => {
                    setBit2(event.target.value)
                    setFocusFlow(event)
                }}
            />

            <RenderInput
                id={'3'}
                placeholder={'c'}
                value={bit3}
                onChange={(event) => {
                    setBit3(event.target.value)
                    setFocusFlow(event)
                }}
            />
            <p style={{ fontSize: 30, color: "black" }}  >-</p>
            <RenderInput
                id={'4'}
                placeholder={'d'}
                value={bit4}
                onChange={(event) => {
                    setBit4(event.target.value)
                    setFocusFlow(event)
                }}
            />
            <RenderInput
                id={'5'}
                placeholder={'e'}
                value={bit5}
                onChange={(event) => {
                    setBit5(event.target.value)
                    setFocusFlow(event)
                }}
            />

        </div>
    )
}

export default OtpComponent
