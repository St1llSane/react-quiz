import styles from './QuizFinal.module.css'

function QuizFinal({ correct }) {
  return (
    <div className={styles.quizFinal}>
      <img
        className={styles.quizFinalImg}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      ></img>
      <h1 className={styles.quizFinalTitle}>Правильных ответов: {correct}</h1>
      <a className={styles.quizAgainBtn} href="\">
        Сыграть еще раз
      </a>
    </div>
  )
}

export default QuizFinal
