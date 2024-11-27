import {Trash} from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react'

import { ITask} from '../../App'

interface TarefaProps{
    data: ITask
    content: string
    removerTarefa: (valor: number) => void
    alterarStatus: (id: number) => void
    valorStatus: boolean
}

export function Task({content, removerTarefa, data, alterarStatus, valorStatus}:TarefaProps){
    const classNamesTarefas = valorStatus ? styles['checkbox-checked'] : styles['checkbox_unchecked']
    const classNameParagrafo = valorStatus ? styles['paragrafo-checked'] : styles['paragrafo']
    
    function handleDeletar(){
        removerTarefa(data.id)
    }

    return(
        <div className={styles.Task}  >
            <label htmlFor=""  onClick={() => alterarStatus(data.id)}>
                <input type="checkbox" className={styles.checkbox}/>
                <span className={`${styles.check} ${classNamesTarefas}`}></span>

                <p className={classNameParagrafo}>{content}</p>

                <button onClick={handleDeletar}>
                    <Trash size={22}/>
                </button>
                
            </label>
        </div>
    )
}