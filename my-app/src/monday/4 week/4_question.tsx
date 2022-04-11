import React, {useState, MouseEvent} from 'react';
// Что надо написать вместо ххх, чтобы данные из формы
// не отправлялись на сервер и страница не перезагружалась
// при клике по кнопке?
// e.preventDefault() ???

export function FourWeekFourQuestion() {
        const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
               e.preventDefault()
                alert()
            }
        return (
                <form>
                    <h2>4 вопрос</h2>
                    <div>
                        <label style={{padding: "10px 0"}}>
                        Name:
                            <input type={"email"} name={"email"}/>
                    </label>
                </div>
                <div>
                    <label style={{padding: "10px 0"}}>
                        Password:
                            <input type={"password"} name={"password"}/>
                    </label>
                </div>
                <button
                    onClick={onClickHandler}
                    type={"submit"}>
                        Log in
                </button>
                    <h4>Ответ: e.preventDefault() ???</h4>
            </form>
        )
    }



