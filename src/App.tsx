import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header/Header'

import iconBotao from './assets/iconBotao.svg'
import { Empty } from './components/Empty/Empty'
import { Task } from './components/Task/Task'
import { ChangeEvent, FormEvent, useState } from 'react'

 export interface Task {
  id: number;
  text: string;
}

function App() {
  const [tarefa, setTarefa] = useState<Task[]>([]);
  const [valorInput, setValorInput] = useState('');
  const [tarefasCriadas, setTarefasCriadas] = useState(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);

  function handleCapturaTarefa(event: ChangeEvent<HTMLInputElement>){
    setValorInput(event.target.value);
    console.log(valorInput)
  }

  function handleAdicionandoTarefa(event:  FormEvent<HTMLFormElement> ){
    event.preventDefault()
    
    const novaTarefa: Task = {
      id: new Date().getTime(),
      text: valorInput
    }

    setTarefa((state) => [...state, novaTarefa]);
    setTarefasCriadas((state) => state + 1);
    console.log(tarefa)
  }

  return(
    <div>
      <Header/>

      <main className={styles.main}>
          <form  className={styles.formNovaTarefa} onSubmit={handleAdicionandoTarefa}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa'
              value={valorInput} 
              onChange={handleCapturaTarefa}
            />
            <button type='submit' >Criar <img src={iconBotao} alt="" /></button>
          </form>

          <div className={styles.containerTasks}>

              <div className={styles.informacoes}>
                  <p className={styles.paragrafo1}>Tarefas criadas <span>{tarefasCriadas}</span></p>
                  <p className={styles.paragrafo2}>Concluídas <span>{`${tarefasConcluidas} de ${tarefasCriadas}`}</span></p>
              </div>

              <div>
              {tarefasCriadas > 0 ? ( 
	              <div>
                  {tarefa.map((task) => (
                    <Task content={task.text}/>
                  ))}
                </div>
              ) : (
                <Empty/>
              )}

              </div>
          </div>
      </main>
    </div>
    
  )
}

export default App
