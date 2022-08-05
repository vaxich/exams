import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'

export const TempManager = () => {
    const [temp, setTemp] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const resetTemp = useCallback(() => setTemp(0),[])
    const increaseSeconds = () => setSeconds(seconds + 100)

    return (
        <>
            <TempDisplay temp={temp} reset={resetTemp}/>
            <div>
                <p><b>Секунды:</b> {seconds} с</p>
                <button onClick={increaseSeconds}>
                    Увеличить время на 100 секунд
                </button>
            </div>
        </>
    )
}

const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div>
            <p><b>Температура</b>: {props.temp} &#176;</p>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
})

ReactDOM.render(<TempManager/>, document.getElementById('root'))


//При увеличении времени (при клике на button) компонент TempDisplay
//тоже перерисовывается. Эта перерисовка является избыточной.
//Найдите в чем причина лишних перерисовок.
//Исправленную версию строки напишите в качестве ответа.

//Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)
// const resetTemp = useCallback(() => setTemp(0),[]) - верно