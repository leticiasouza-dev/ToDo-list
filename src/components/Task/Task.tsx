import {Trash} from 'phosphor-react'
import styles from './Task.module.css'
import { useState } from 'react'

import { ITask} from '../../App'

interface TarefaProps{
    data: ITask
    content: string
    removerTarefa: (valor: number) => void
}

export function Task({content, removerTarefa, data}:TarefaProps){
    const[tarefaClicada, setTarefaClicada] = useState(false)
    const classNamesTarefas = tarefaClicada ? styles['checkbox-checked'] : styles['checkbox_unchecked']
    const classNameParagrafo = tarefaClicada ? styles['paragrafo-checked'] : styles['paragrafo']
    
    function handleDeletar(){
        removerTarefa(data.id)
    }

    function handleMudarCheckbox(){
        setTarefaClicada(true)
    }

    return(
        <div className={styles.Task}  >
            <label htmlFor=""  onClick={handleMudarCheckbox}>
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