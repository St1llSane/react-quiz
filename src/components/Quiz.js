import { useState } from 'react'
import styles from './Quiz.module.css'
import QuizList from './QuizList'
import { questions } from '../data/questions'
import QuizFinal from './QuizFinal'

function Quiz() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const progressBar = Math.round((step / questions.length) * 100)

  return (
    <div className={styles.quiz}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarHide}
          style={{ bottom: `${progressBar}%` }}
        ></div>
        {step !== questions.length ? (
          <div className={styles.quizBody}>
            <h2 className={styles.quizTitle}>{questions[step].title}</h2>
            <QuizList
              step={step}
              setStep={setStep}
              questions={questions}
              correct={correct}
              setCorrect={setCorrect}
            />
          </div>
        ) : (
          <QuizFinal correct={correct} />
        )}
      </div>
    </div>
  )
}

export default Quiz
