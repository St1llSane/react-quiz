import styles from './QuizList.module.css'

function QuizList({ step, setStep, questions, correct, setCorrect }) {
  const question = questions[step]

  const nextStep = (index) => {
    if (index === question.answer) {
      setCorrect(correct + 1)
    }
    setStep(step + 1)
  }

  return (
    <ul className={styles.quizList} correct={correct}>
      {question.variants.map((variant, index) => {
        return (
          <li
            className={styles.quizListItem}
            onClick={() => nextStep(index)}
            key={variant}
          >
            {variant}
          </li>
        )
      })}
    </ul>
  )
}

export default QuizList
