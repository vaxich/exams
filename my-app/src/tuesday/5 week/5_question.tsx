// Что надо вставить вместо XXX, чтобы круг менял цвет по клику?

// getColor(colors) - верно

import React, {ChangeEvent, useState} from 'react';
import ReactDOM from 'react-dom';


export function FiveWeekFiveQuestion() {

  const [color, setColor] = useState<string>("black")
  const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "black"
  }

  const getColor = (colors: string[]) => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)]
    return nextColor
  }

  return (
    <main>
      <h2>5 вопрос</h2>
      <div style={{...styles, backgroundColor: color}}/>
      <div>
        <button
          onClick={() => setColor(getColor(colors))}
        >
          Get random color
        </button>
      </div>
      <h4>Ответ: getColor(colors)</h4>
    </main>
  )
}


