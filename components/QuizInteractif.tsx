import React from 'react'
import { useState } from 'react'
  const questions = [
    { texte: 'React est un framework.', reponse: false },
    { texte: 'useState permet de gérer l\'état.', reponse: true },
    { texte: 'JSX est une extension CSS.', reponse: false },
    { texte: 'Le Virtual DOM est plus rapide.', reponse: true }
  ]
  function QuizInteractif() {
    const [indice, setIndice] = useState(0)
    const [score, setScore] = useState(0)
    const [message, setMessage] = useState('')
    const [termine, setTermine] = useState(false)
  
    const questionActuelle = questions[indice]

    const verifierReponse = (choix: boolean) => {
        if (choix === questionActuelle.reponse) {
          setScore(score + 1)
          setMessage('Bonne réponse ! ')
        } else {
          setMessage('Mauvaise réponse ')
        }
      }
    const suivante = () => {
        if (indice + 1 < questions.length) {
          setIndice(indice + 1)
          setMessage('')
        } else {
          setTermine(true)
        }
      }
    const recommencer = () => {
        setIndice(0)
        setScore(0)
        setMessage('')
        setTermine(false)
      }
    return (
        <div>
          {!termine ? (
            <>
              <h2>{questionActuelle.texte}</h2>
              <button onClick={() => verifierReponse(true)}>Vrai</button>
              <button onClick={() => verifierReponse(false)}>Faux</button>
              <p>{message}</p>
              <button onClick={suivante}>Question suivante</button>
            </>
          ) : (
            <>
              <h2>Quiz terminé !</h2>
              <p>Score : {score} / {questions.length}</p>
              <button onClick={recommencer}>Recommencer</button>
            </>
          )}
        </div>
      )
    }
export default QuizInteractif;
      
    
    
    
    