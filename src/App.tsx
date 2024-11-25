import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header/Header'

import iconBotao from './assets/iconBotao.svg'
import { Empty } from './components/Empty/Empty'
import { Task } from './components/Task/Task'

function App() {
  return(
    <body>
      <Header/>

      <main className={styles.main}>
          <form  className={styles.formNovaTarefa}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>Criar <img src={iconBotao} alt="" /> </button>
          </form>


          <div className={styles.containerTasks}>

              <div className={styles.informacoes}>
                  <p className={styles.paragrafo1}>Tarefas criadas <span>0</span></p>
                  <p className={styles.paragrafo2}>Concluídas <span>0</span></p>
              </div>

              <div>
                <Task/>
              </div>
          </div>
      </main>
    </body>
    
  )
}

export default App
