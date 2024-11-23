import styles from './Empty.module.css'

import iconEmpty from '../../assets/iconEmpty.svg'

export function Empty(){
    return(
        <div className={styles.containerEmpty}>
            <img src={iconEmpty} alt="" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}