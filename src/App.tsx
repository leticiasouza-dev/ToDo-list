import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header/Header'

import iconBotao from './assets/iconBotao.svg'
import { Empty } from './components/Empty/Empty'
import { Task } from './components/Task/Task'
import { ChangeEvent, FormEvent, useState } from 'react'

 export interface ITask {
  id: number;
  text: string;
  isTarefaClicada: boolean
}

function App() {
  const [tarefa, setTarefa] = useState<ITask[]>([]);
  const [valorInput, setValorInput] = useState('');
  const [tarefasCriadas, setTarefasCriadas] = useState(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);

  function handleCapturaTarefa(event: ChangeEvent<HTMLInputElement>){
    setValorInput(event.target.value);
    console.log(valorInput)
  }

  function handleAdicionandoTarefa(event:  FormEvent<HTMLFormElement> ){
    event.preventDefault()

    const novaTarefa: ITask = { // criando nova tarefa passando o valor do input
      id: new Date().getTime(),
      text: valorInput,
      isTarefaClicada: false
    }

    setTarefa((state) => [...state, novaTarefa]); // mantendo as tarefas anteriores e adicionado a nova
    setValorInput('')
    setTarefasCriadas((state) => state + 1);
  }

  function handleRemoverTarefa(id: number){ // removendo a tarefa pelo id
    const tarefasFiltradas = tarefa.filter((tarefas) => {
      return tarefas.id !== id // mantendo no array somente as tarefas com o id diferente do id passado
      
    });

    setTarefa(tarefasFiltradas)  // deixando no array as tarefas com o id difernte do id passado
    setTarefasCriadas((state) => state - 1);
  }

  function handleAlterarStatus(id: number){
    setTarefa((prev) => prev.map((tarefa) => {
      if(tarefa.id === id){
        const novoStatus = !tarefa.isTarefaClicada;
        if (novoStatus && !tarefa.isTarefaClicada) {
          setTarefasConcluidas(tarefasConcluidas + 1);  // Incrementa se a tarefa foi concluída
        }
        // Se a tarefa foi desmarcada (isTarefaClicada se tornando false)
        if (!novoStatus && tarefa.isTarefaClicada) {
          setTarefasConcluidas(tarefasConcluidas- 1);  // Decrementa se a tarefa foi desmarcada
        }
        
        if(!novoStatus && !tarefa.isTarefaClicada){
          setTarefasConcluidas(0)
        }

        return {...tarefa, isTarefaClicada:novoStatus};
      } else{
        return tarefa;
      }
    }))
  }

  return(
    <div>
      <Header/>

      <main className={styles.main}>
          <form  className={styles.formNovaTarefa} onSubmit={handleAdicionandoTarefa}>
            <input
              className={styles.inputNovaTarefa} 
              type="text" 
              placeholder='Adicione uma nova tarefa'
              value={valorInput} 
              onChange={handleCapturaTarefa}
            />
            <button type='submit' className={styles.buttonCriar}>Criar <img src={iconBotao} alt="" /></button>
          </form>

          <div className={styles.containerTasks}>

              <div className={styles.informacoes}>
                  <p className={styles.paragrafo1}>Tarefas criadas <span>{tarefasCriadas}</span></p>
                  <p className={styles.paragrafo2}>Concluídas <span>{`${tarefasConcluidas} de ${tarefasCriadas}`}</span></p>
              </div>

              <div className={styles.divTasks}>
                {tarefasCriadas > 0 ? (
                  <div className={styles.Task}>
                    {tarefa.map((task) => (
                      <Task 
                        key={task.id} 
                        content={task.text} 
                        removerTarefa={handleRemoverTarefa} 
                        data={task}
                        alterarStatus={handleAlterarStatus}
                        valorStatus={task.isTarefaClicada}
                        />
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
