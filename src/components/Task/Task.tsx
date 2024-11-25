import {Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react'

export function Task(){
    const [className, setClassName] = useState('checkbox_unchecked');

    function handleTaskColor(){
        setClassName('checkbox_checked')
    }

    return(
        <div className={styles.Task}>
            <label htmlFor="" onClick={handleTaskColor}>
                <input type="checkbox" className={styles.checkbox}/>
                <span className={`${styles.check} ${className}`}></span>

                <p className={styles.paragrafo}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integerssssssssssssssssssssssssssssssssss</p>
                <Trash size={22} />
            </label>
        </div>
    )
}