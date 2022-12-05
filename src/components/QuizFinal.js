import styles from './QuizFinal.module.css'

function QuizFinal({ correct }) {
  return (
    <div className={styles.quizFinal}>
      <img className={styles.quizFinalImg} src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"></img>
      <h1>Правильных ответов: {correct}</h1>
    </div>
  )
}

export default QuizFinal
