import {Trash} from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react'

import { ITask} from '../../App'

interface TarefaProps{
    data: ITask
    content: string
    removerTarefa: (id: number) => void
}

export function Task({content, removerTarefa, data}:TarefaProps){
    const [className, setClassName] = useState('checkbox_unchecked');

    function handleTaskColor(){
        setClassName('checkbox_checked')
    }

    function handleDeletar(){
        removerTarefa(data.id)
    }

    return(
        <div className={styles.Task}>
            <label htmlFor="" onClick={handleTaskColor}>
                <input type="checkbox" className={styles.checkbox}/>
                <span className={`${styles.check} ${className}`}></span>

                <p className={styles.paragrafo}>{content}</p>

                <button onClick={handleDeletar}>
                    <Trash size={22}/>
                </button>
                
            </label>
        </div>
    )
}