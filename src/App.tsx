import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header/Header'

import iconBotao from './assets/iconBotao.svg'

function App() {
  return(
    <body>
      <Header/>

      <main className={styles.main}>
          <form  className={styles.formNovaTarefa}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>Criar <img src={iconBotao} alt="" /> </button>
          </form>
      </main>
    </body>
    
  )
}

export default App
