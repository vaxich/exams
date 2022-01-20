
import React from 'react';

// что нужно написать вместо XXX и YYY
//ответ дай через пробел
// mainArticle news

export type NewsType = {
        title: string
        author: string
    }
export type ArticleType = {
        title: string
        date: string
        text: string
    }
export type OneWeekSixQuestionPropsType = {
        news: NewsType[]
        mainArticle: ArticleType
    }
export const OneWeekSixQuestion: React.FC<OneWeekSixQuestionPropsType> = (props) => {

        return (
            <div>
                <h2>6 вопрос</h2>
                <article>
                    <h1>Название: {props.mainArticle.title}</h1>
                    {props.mainArticle.date}
                    <div>{props.mainArticle.date}</div>
                    <div>{props.mainArticle.text}</div>
                </article>
                <aside>Articles:
                    <ul>
                        {props.news.map(n => <li>{n.title}, {n.author}</li>)}
                    </ul>
                </aside>
                <h4>ответ: mainArticle news</h4>
            </div>
            )
        }
